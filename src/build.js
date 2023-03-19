import fs from 'fs';

const version = process.env.COMMIT_MESSAGE;

(async () => {
  const iconsData = JSON.parse(fs.readFileSync(`lib/ionicons-${version}/src/data.json`, 'utf-8')).icons;
  if (!Array.isArray(iconsData)) return;
  const icons = iconsData.map((icon) => icon.name);
  const res = {};
  for (const icon of icons) {
    res[icon] = fs
      .readFileSync(`lib/ionicons-${version}/src/svg/${icon}.svg`, 'utf-8')
      .replace(/(height|width)=".*?" /g, '')
      .replace(/<title>.*?<\/title>/g, '');
  }
  fs.writeFileSync('../lib/iconList.json', JSON.stringify(res));
})();
