import fs from 'fs';

const version = process.env.COMMIT_MESSAGE;

(async () => {
  const iconsData = JSON.parse(fs.readFileSync(`lib/ionicons-${version}/src/data.json`, 'utf-8')).icons;
  if (!Array.isArray(iconsData)) return;
  const icons = iconsData.map((icon) => icon.name);
  const res: { [key: string]: string } = {};
  for (const icon of icons) {
    res[icon] = fs
      .readFileSync(`lib/ionicons-${version}/src/svg/${icon}.svg`, 'utf-8')
      .replace(/stroke=".+?" /g, '')
      .replace(/(height|width)=".*?" /g, '')
      .replace(/stroke:.*?;/g, '')
      .replace(/<title>.*?<\/title>/g, '');
  }
  fs.writeFileSync('./lib/components/iconList.json', JSON.stringify(res));
})();
