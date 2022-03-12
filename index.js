const express = require('express')
const puppeteer = require('puppeteer')

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
});

const port = process.env.port || 5005

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--use-gl=egl'],
      });
        const page = await browser.newPage();
        await page.goto('https://www.iaproducers.com/Producers/FMLogin.aspx?ReturnUrl=/Producers/', {
            waitUntil: 'networkidle2',
        });
        await page.screenshot({path: 'example.png'});
        await browser.close();
})