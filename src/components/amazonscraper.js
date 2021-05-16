const puppeteer = require("puppeteer");

async function scrapeProducts(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.goto(url);

  const [el] = await page.$x(
    '//*[@id="customer_review-R8M7RNLG11XVL"]/div[4]/span/div/div[1]/span'
  );
  const src = await el.getProperty("text");
  const srcTxt = await src.jsonValue();

  console.log({ srcTxt });
  browser.close();
}
scrapeProducts(
  "https://www.amazon.in/AMARON-BATTERY-AP-BTZ4L-GREEN-COLOUR/dp/B076V7F9MP/ref=pd_lpo_263_img_1/258-3110007-5964937?_encoding=UTF8&pd_rd_i=B076V7F9MP&pd_rd_r=1b89c667-a368-4a16-8023-c3210ae2f159&pd_rd_w=SsWU3&pd_rd_wg=uibYv&pf_rd_p=6b10875b-45e7-4b58-9b02-21bb75fd5289&pf_rd_r=CYPRQN49H88QVWPF9P7H&psc=1&refRID=CYPRQN49H88QVWPF9P7H"
);
