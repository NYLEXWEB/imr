import http from 'http';

const routes = [
  '/',
  '/about',
  '/about/our-story',
  '/services',
  '/services/medical-recruitment',
  '/services/construction-hospitality',
  '/services/oil-gas',
  '/services/education',
  '/services/production-transportation',
  '/industries',
  '/recruitment-process',
  '/employers',
  '/job-seekers',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/non-existent-page-test'
];

async function checkRoute(route) {
  return new Promise((resolve) => {
    http.get(`http://localhost:5173${route}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          route,
          statusCode: res.statusCode,
          hasRoot: data.includes('<div id="root"></div>'),
          hasTitle: data.includes('<title>'),
          length: data.length
        });
      });
    }).on('error', (err) => {
      resolve({ route, error: err.message });
    });
  });
}

async function run() {
  console.log('Testing Vite server route responses on http://localhost:5173...');
  let allPass = true;
  for (const r of routes) {
    const res = await checkRoute(r);
    if (res.statusCode === 200 && res.hasRoot) {
      console.log(`[PASS] ${r} -> Status ${res.statusCode}, SPA HTML delivered (${res.length} bytes)`);
    } else {
      console.error(`[FAIL] ${r} ->`, res);
      allPass = false;
    }
  }

  // Also test asset delivery
  const assetTest = await checkRoute('/images/home/hero-global-workforce.svg');
  console.log(`[ASSET CHECK] /images/home/hero-global-workforce.svg -> Status ${assetTest.statusCode} (${assetTest.length} bytes)`);

  if (allPass && assetTest.statusCode === 200) {
    console.log('\nALL 17 ROUTES AND ASSETS VERIFIED SUCCESSFULLY!');
  } else {
    console.error('\nSOME ROUTES FAILED VERIFICATION.');
  }
}

run();
