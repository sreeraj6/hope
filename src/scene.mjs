import * as THREE from 'three';

// One property, five scroll-driven camera positions. All geometry and feeds are local.
export function createScene(host) {
  const holder = host.querySelector('#scene-canvas');
  const experience = host.closest('#experience');
  let mobile = matchMedia('(max-width: 899px)').matches;
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.25 : 1.6));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate = false;
  holder.append(renderer.domElement);
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#151e21');
  scene.fog = new THREE.FogExp2('#151e21', .012);
  const camera = new THREE.PerspectiveCamera(42, 1, .08, 160);
  const exterior = new THREE.Group(), interior = new THREE.Group(), network = new THREE.Group();
  scene.add(exterior, interior, network);
  const materials = [], textures = [], targets = [];
  function material(color, options = {}) {
    const m = new THREE.MeshStandardMaterial({ color, roughness: .75, ...options });
    materials.push(m); return m;
  }
  // Subtle surface variation gives concrete and timber scale in close-ups.
  function surface(color, wood = false) {
    const canvas = document.createElement('canvas'); canvas.width = canvas.height = 128;
    const ctx = canvas.getContext('2d'); ctx.fillStyle = color; ctx.fillRect(0, 0, 128, 128);
    let seed = 27;
    const random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    for (let i = 0; i < 1800; i++) {
      ctx.fillStyle = `rgba(${random() > .5 ? '255,255,255' : '0,0,0'},${random() * .09})`;
      ctx.fillRect(random()*128, random()*128, wood ? 1 : 2, wood ? random()*45 : 2);
    }
    const t = new THREE.CanvasTexture(canvas); t.colorSpace = THREE.SRGBColorSpace;
    t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(2, 2); textures.push(t); return t;
  }
  const concrete = material('#d4cec0', { map: surface('#c7c2b5') });
  const plaster = material('#e1ded3');
  const timber = material('#a7774c', { map: surface('#ad8058', true) });
  const metal = material('#263237', { metalness: .75, roughness: .35 });
  const dark = material('#10191e', { metalness: .3 });
  const glass = material('#365759', { metalness: .7, roughness: .12, transparent: true, opacity: .62 });
  const warm = material('#ffdda2', { emissive: '#ffbb61', emissiveIntensity: 2.2 });
  const green = material('#97f3c7', { emissive: '#57dba8', emissiveIntensity: 2 });
  const lawn = material('#34493b');
  const cube = new THREE.BoxGeometry(1,1,1);
  const sphere = new THREE.SphereGeometry(1,12,8);
  const cylinder = new THREE.CylinderGeometry(1,1,1,16);
  const box = (g,x,y,z,w,h,d,m=concrete) => {
    const o = new THREE.Mesh(cube,m); o.position.set(x,y,z); o.scale.set(w,h,d);
    o.castShadow = true; o.receiveShadow = true; g.add(o); return o;
  };
  function tube(g,points,color='#79d8b8',radius=.018) {
    const curve = new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)),false,'catmullrom',.1);
    const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve,32,radius,6,false),material(color,{emissive:color,emissiveIntensity:.6}));
    g.add(mesh); return curve;
  }
  function disc(g,x,y,z,r,h,m) {
    const o = new THREE.Mesh(cylinder,m); o.position.set(x,y,z);o.scale.set(r,h,r);g.add(o);return o;
  }
  // Ground, landscaped property, driveway and perimeter.
  box(exterior,0,-.38,0,180,.3,180,material('#192423'));
  box(exterior,0,-.16,0,18,.3,15,concrete);
  box(exterior,-5.8,.015,0,3.4,.06,12.8,lawn);
  box(exterior,6.2,.015,-.2,3.1,.06,12.5,lawn);
  box(exterior,.5,.025,4.6,7.1,.08,5.6,material('#7c807c'));
  for(let i=0;i<10;i++) box(exterior,.5,.07,2+i*.55,7,.015,.018,metal);
  for(const x of [-8.5,8.5]) box(exterior,x,.5,0,.2,1,14,concrete);
  for(const x of [-6,6]) {
    box(exterior,x,.65,6.8,5,1.3,.25,concrete);
    box(exterior,x,1.32,6.8,5,.06,.32,metal);
  }
  for(const x of [-3.45,3.45]) {
    box(exterior,x,.95,6.8,.45,1.9,.48,concrete);
    box(exterior,x,1.4,7.055,.18,.13,.035,warm);
  }
  box(exterior,3.7,1.1,7.08,.2,.32,.07,dark);
  box(exterior,3.7,1.14,7.125,.12,.12,.02,green);
  const gates=[];
  for(const side of [-1,1]) {
    const pivot=new THREE.Group();pivot.position.set(side*3.2,0,6.8);exterior.add(pivot);
    box(pivot,-side*1.6,.85,0,3.2,1.55,.1,metal);
    for(let i=0;i<20;i++) box(pivot,-side*(.08+i*.16),.85,.07,.085,1.47,.08,timber);
    box(pivot,-side*3.05,.9,.14,.04,.3,.05,metal);gates.push(pivot);
  }
  // A two-storey villa: deep eaves, warm interior, timber fins and glazed bays.
  box(exterior,0,.15,-1,10.5,.25,7.1,concrete);
  box(exterior,0,1.7,-4.3,10,3.1,.25,plaster);
  box(exterior,-4.9,1.7,-1,.2,3.1,6.6,plaster);
  box(exterior,4.9,1.7,-1,.2,3.1,6.6,plaster);
  box(exterior,0,3.32,-1,10.7,.27,7.2,concrete);
  box(exterior,0,3.13,2.53,10.5,.045,.07,warm);
  box(exterior,2.8,1.7,2.25,2.6,3,.3,timber);
  box(exterior,2.4,1.5,2.43,1.15,2.65,.1,metal);
  box(exterior,2.83,1.5,2.51,.045,.4,.06,warm);
  for(const x of [-3.8,-2.2,-.6,.95]) {
    box(exterior,x,1.65,2.3,1.5,2.8,.06,glass);
    box(exterior,x-.78,1.65,2.36,.055,2.9,.1,metal);
  }
  box(exterior,-1.6,.65,1.1,3.3,.7,1.1,material('#c7b49a'));
  box(exterior,-1.6,.7,-.4,1.8,.08,.9,timber);
  for(const x of [-3,0]) box(exterior,x,.5,1.3,.18,.8,1,metal);
  const upper=new THREE.Group();exterior.add(upper);
  box(upper,-1.2,4.7,-4.1,7.4,2.55,.2,timber);
  box(upper,-4.8,4.7,-1.8,.2,2.55,4.8,timber);
  box(upper,2.4,4.7,-1.8,.2,2.55,4.8,timber);
  box(upper,-1.2,3.48,-1.8,7.4,.15,4.8,timber);
  box(upper,-1.2,4.6,-3.94,6.9,1.9,.025,material('#ae9065',{emissive:'#a47035',emissiveIntensity:.4}));
  box(upper,-2.4,3.85,-.4,2,.5,1.5,plaster);
  box(upper,-1.2,6.03,-1.8,7.9,.18,5.25,metal);
  box(upper,-1.2,4.7,.64,6.5,2.1,.06,glass);
  for(let i=0;i<6;i++) box(upper,-4.45+i*1.3,4.7,.72,.06,2.2,.1,metal);
  box(upper,-1.2,3.66,.77,6.5,.035,.05,warm);
  for(let i=0;i<20;i++) box(upper,2.55,4.7,-3.95+i*.23,.12,2.55,.075,timber);
  // Balcony and entry steps.
  box(exterior,3.8,3.58,1.5,2.3,.6,.055,glass);
  box(exterior,4.95,3.58,-.2,.055,.6,3.4,glass);
  for(let i=0;i<3;i++) box(exterior,2.4,.05+i*.07,3.2-i*.35,2.4,.12,.7,concrete);
  for(let i=0;i<5;i++) {
    box(exterior,-5.8,.13,4.7-i*1.1,1.9,.14,.8,plaster);
    box(exterior,-7.35,.38,4.7-i*1.8,.16,.72,.16,metal);
    box(exterior,-7.35,.75,4.7-i*1.8,.18,.045,.18,warm);
  }
  function tree(x,z,height) {
    disc(exterior,x,height*.48,z,.11,height,timber);
    const foliage = new THREE.InstancedMesh(sphere, material('#455d40', {roughness:1}), 46);
    const matrix = new THREE.Matrix4(), rotation = new THREE.Quaternion();
    for(let i=0;i<46;i++) {
      const theta=i*2.39996, radius=.95*Math.sqrt(i/46), yy=Math.sin(i*3.1)*.6;
      matrix.compose(new THREE.Vector3(x+Math.cos(theta)*radius,height+yy,z+Math.sin(theta)*radius), rotation, new THREE.Vector3(.4,.35,.4));
      foliage.setMatrixAt(i,matrix);
      foliage.setColorAt(i,new THREE.Color().setHSL(.25+(i%3)*.012,.19,.18+(i%7)*.018));
    }
    foliage.castShadow=true;exterior.add(foliage);
  }
  [[-6.5,-3,3.2],[6.5,-3.5,3.5],[7,2,2.5],[-7,-6,4],[6,-6,4.1]].forEach(p=>tree(...p));
  for(let i=0;i<14;i++) {
    const o=new THREE.Mesh(sphere,lawn);o.position.set(-7.5,.3,-5+i*.65);o.scale.set(.5,.4,.5);exterior.add(o);
  }
  // Real geometry camera housings, lenses and mounting arms.
  const cameraLocations=[[-4.65,2.9,2.6],[4.65,2.9,2.6],[4.99,2.8,-3.5],[-4.99,2.8,-3.5]];
  cameraLocations.forEach(([x,y,z],i)=>{
    const g=new THREE.Group();g.position.set(x,y,z);g.rotation.y=i===0?-.35:i===1?.5:Math.PI/2;exterior.add(g);
    box(g,0,-.12,-.15,.08,.3,.09,metal);box(g,0,-.22,-.28,.24,.12,.08,plaster);
    box(g,0,.04,.07,.38,.26,.62,plaster);box(g,0,.2,.1,.44,.065,.73,plaster);
    const lens=disc(g,0,.04,.39,.11,.035,dark);lens.rotation.x=Math.PI/2;
    const inner=disc(g,0,.04,.415,.065,.025,glass);inner.rotation.x=Math.PI/2;
    box(g,.12,-.035,.398,.025,.025,.015,green);
  });
  // Interior control room. It occupies the same property; the shell lifts away on entry.
  box(interior,0,.03,0,9,.12,6,material('#68716d'));
  box(interior,0,1.65,-2.6,9,3.3,.15,material('#26383a'));
  box(interior,-4.5,1.65,-.2,.15,3.3,4.8,timber);
  box(interior,0,3.25,-2.45,8.8,.04,.06,warm);
  const feedCameras = cameraLocations.map(([x,y,z],i)=>{
    const c=new THREE.PerspectiveCamera(75,16/9,.1,90);c.position.set(x,y,z+.4);
    c.lookAt(i<2?0:7,0,i<2?7:-5);return c;
  });
  const screens=[];
  for(let i=0;i<4;i++) {
    const x=-1.9+(i%2)*2.25,y=1.3+Math.floor(i/2)*1.25;
    box(interior,x,y,-2.42,2.18,1.2,.12,dark);
    const target=new THREE.WebGLRenderTarget(mobile?384:640,mobile?216:360);targets.push(target);
    const m=new THREE.MeshBasicMaterial({map:target.texture,toneMapped:false});materials.push(m);
    const screen=box(interior,x,y,-2.345,2.04,1.06,.02,m);screens.push(screen);
    box(interior,x-.9,y+.45,-2.32,.035,.035,.02,green);
  }
  box(interior,-.8,.76,-.6,5,.13,1.25,timber);
  for(const x of [-2.9,1.3]) box(interior,x,.36,-.6,.09,.72,1,metal);
  box(interior,-.9,.85,-.25,1.1,.04,.35,dark);
  for(let i=0;i<12;i++) for(let j=0;j<3;j++) box(interior,-1.38+i*.085,.88,-.36+j*.095,.06,.018,.06,metal);
  disc(interior,.0,.85,-.2,.09,.05,metal);
  // Two populated racks with patch panels, drive bays, vents, status LEDs and patch leads.
  const leds=[];
  for(const x of [2.4,3.65]) {
    box(interior,x,1.4,-1.65,1.05,2.8,1.3,dark);
    for(const side of [-1,1]) box(interior,x+side*.49,1.4,-.95,.055,2.7,.06,metal);
    for(let row=0;row<10;row++) {
      const y=.22+row*.25;box(interior,x,y,-.96,.91,.2,.1,metal);
      for(let j=0;j<7;j++) box(interior,x-.33+j*.09,y,-.895,.045,.09,.02,dark);
      leds.push(box(interior,x+.36,y,-.89,.027,.027,.02,green));
    }
    for(let j=0;j<5;j++) tube(interior,[[x-.3+j*.13,2.45,-.88],[x-.3+j*.13,2.2-j*.06,-.7],[x+.3,1.9-j*.05,-.88]],j%2?'#83b4cf':'#c4a36b',.013);
  }
  // Local simulated CCTV feeds show this exact property, never an external camera.
  function renderFeeds() {
    const ext=exterior.visible,int=interior.visible,net=network.visible;
    const clipping=renderer.localClippingEnabled;renderer.localClippingEnabled=false;
    exterior.visible=true;interior.visible=false;network.visible=false;
    feedCameras.forEach((c,i)=>{renderer.setRenderTarget(targets[i]);renderer.render(scene,c);});
    renderer.setRenderTarget(null);renderer.localClippingEnabled=clipping;exterior.visible=ext;interior.visible=int;network.visible=net;
  }
  const rings=[],packets=[];
  const accessPoints=[[-3,3.5,1.2],[2.8,3.5,-2.7],[0,6.2,-1],[6,.15,2.4],[-5.8,.15,3.5]];
  accessPoints.forEach(([x,y,z])=>{
    disc(network,x,y,z,.17,.09,plaster);disc(network,x,y+.055,z,.06,.015,green);
    for(let i=0;i<3;i++) {
      const m=new THREE.MeshBasicMaterial({color:'#80ebc6',transparent:true,opacity:.22,depthWrite:false});materials.push(m);
      const ring=new THREE.Mesh(new THREE.TorusGeometry(1,.013,6,72),m);ring.rotation.x=-Math.PI/2;
      ring.position.set(x,y+.08,z);network.add(ring);rings.push({ring,phase:i/3});
    }
    const curve=tube(network,[[3.65,.2,-1.65],[3.65,.2,z],[x,.2,z],[x,y+.1,z]],'#79d8b8',.025);
    const p=new THREE.Mesh(sphere,green);p.scale.setScalar(.065);network.add(p);packets.push({p,curve});
  });
  scene.add(new THREE.HemisphereLight('#bacbd4','#414838',2.2));
  const sun=new THREE.DirectionalLight('#ffe1b2',3.6);sun.position.set(-9,15,9);sun.castShadow=true;
  sun.shadow.mapSize.set(mobile?1024:2048,mobile?1024:2048);sun.shadow.camera.left=-14;sun.shadow.camera.right=14;
  sun.shadow.camera.top=14;sun.shadow.camera.bottom=-14;sun.shadow.normalBias=.04;scene.add(sun);
  const fill=new THREE.DirectionalLight('#89b9cb',1.6);fill.position.set(8,7,-6);scene.add(fill);
  const roomLight=new THREE.PointLight('#c0e6e3',35,14,2);roomLight.position.set(0,3,1);scene.add(roomLight);

  const cutaway = new THREE.Plane(new THREE.Vector3(0,-1,0), 30);
  renderer.localClippingEnabled = true;
  const exteriorMaterials = new Map();
  exterior.traverse(o=>{
    if(!o.isMesh)return;
    if(!exteriorMaterials.has(o.material)) {
      const m=o.material.clone();m.clippingPlanes=[cutaway];m.clipShadows=true;
      exteriorMaterials.set(o.material,m);materials.push(m);
    }
    o.material=exteriorMaterials.get(o.material);
  });
  const views = [
    {pos:[18,11,23],look:[0,2,0]},
    {pos:[9,5,17],look:[0,1.9,1.5]},
    {pos:[9.2,4.4,8.5],look:[4.3,2.7,2]},
    {pos:[6.3,3.4,7.9],look:[.3,1.65,-1.4]},
    {pos:[17,16,21],look:[0,1.5,0]},
  ];
  const tabs=[...host.querySelectorAll('[data-scene]')];
  const chapters=[experience.querySelector('.hero'),...experience.querySelectorAll('.journey-chapter')];
  const caption=host.querySelector('#scene-caption'),pauseButton=host.querySelector('#scene-pause'),replay=host.querySelector('#scene-replay');
  const captions=['00 / Your connected home','01 / Automated gate · Arrival','02 / Perimeter cameras · CCTV','03 / Camera feeds & server racks','04 / Connected in every corner'];
  let target=0,current=0,frame=0,disposed=false,visible=true,paused=false,time=0,lastTime=0,feedFrame=0,active=-1;
  let anchors=[];
  const clamp=THREE.MathUtils.clamp;
  const smooth=t=>t*t*(3-2*t);
  function measure() {
    anchors=chapters.map(el=>el.getBoundingClientRect().top+scrollY-(mobile?76:90));
  }
  function scroll() {
    if(!anchors.length)return;
    const y=scrollY;
    let index=0;while(index<anchors.length-2&&y>=anchors[index+1])index++;
    target=clamp(index+(y-anchors[index])/(anchors[index+1]-anchors[index]),0,4);
    request();
  }
  function jump(index) { window.scrollTo({top:anchors[index],behavior:'instant'});scroll(); }
  function select(e) { jump(Number(e.currentTarget.dataset.scene)); }
  tabs.forEach(t=>t.addEventListener('click',select));
  const pos=new THREE.Vector3(),look=new THREE.Vector3();
  function draw(now=0) {
    frame=0;if(disposed||!visible||document.hidden)return;
    const dt=Math.min((now-lastTime)/1000||.016,.05);lastTime=now;
    if(!paused){time+=dt;current+=(target-current)*(1-Math.exp(-dt*9));}
    if(!paused&&Math.abs(target-current)<.001)current=target;
    const i=Math.min(3,Math.floor(current)),t=smooth(current-i);
    pos.fromArray(views[i].pos).lerp(new THREE.Vector3(...views[i+1].pos),t);
    look.fromArray(views[i].look).lerp(new THREE.Vector3(...views[i+1].look),t);
    if(mobile){pos.sub(look).multiplyScalar(2.1);pos.add(look);}
    camera.position.copy(pos);camera.lookAt(look);
    renderer.shadowMap.needsUpdate = active < 0 || Math.abs(target-current) > .001;
    const gate=smooth(clamp(current/.9,0,1));
    gates[0].rotation.y=-gate*Math.PI*.48;gates[1].rotation.y=gate*Math.PI*.48;
    // Enter the room only after the camera has cleared the facade.
    const entry=smooth(clamp((current-2.25)/.55,0,1));
    const exit=smooth(clamp((current-3.2)/.55,0,1));
    const roomAmount=entry*(1-exit);
    const inside=roomAmount>.1;
    cutaway.constant=7.5-roomAmount*8;
    exterior.visible=roomAmount<.999;interior.visible=inside;network.visible=current>3.55;
    roomLight.visible=inside;
    rings.forEach(({ring,phase})=>{const p=(time*.22+phase)%1;ring.scale.setScalar(.4+p*3.1);ring.material.opacity=(1-p)*.3;});
    packets.forEach(({p,curve},n)=>p.position.copy(curve.getPointAt((time*.16+n*.2)%1)));
    leds.forEach((led,n)=>{led.visible=Math.sin(time*3+n*1.7)>-.65;});
    if(inside&&feedFrame++%20===0)renderFeeds();
    const next=Math.round(current);
    if(next!==active){active=next;host.dataset.chapter=String(next);caption.textContent=captions[next];tabs.forEach((b,n)=>b.setAttribute('aria-pressed',String(n===next)));}
    host.style.setProperty('--tour-progress',`${current/4*100}%`);
    renderer.render(scene,camera);
    if(!paused&&(Math.abs(target-current)>.001||inside||network.visible))request();
  }
  function request(){if(!frame&&!disposed&&visible&&!document.hidden)frame=requestAnimationFrame(draw);}
  function resize(){
    mobile = matchMedia('(max-width: 899px)').matches;
    const r=holder.getBoundingClientRect();if(!r.width||!r.height)return;
    renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;
    camera.setViewOffset(r.width,r.height,mobile?0:-r.width*.16,mobile?-r.height*.05:0,r.width,r.height);
    camera.updateProjectionMatrix();measure();scroll();request();
  }
  const pause=()=>{paused=!paused;pauseButton.textContent=paused?'▶':'Ⅱ';pauseButton.setAttribute('aria-label',paused?'Resume 3D animation':'Pause 3D animation');request();};
  const restart=()=>{paused=false;pauseButton.textContent='Ⅱ';pauseButton.setAttribute('aria-label','Pause 3D animation');jump(0);current=0;request();};
  const visibility=()=>{lastTime=0;if(!document.hidden)request();};
  const ro=new ResizeObserver(resize);ro.observe(holder);
  const io=new IntersectionObserver(([e])=>{visible=e.isIntersecting;if(visible)request();});io.observe(experience);
  window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('resize',resize);
  document.addEventListener('visibilitychange',visibility);pauseButton.addEventListener('click',pause);replay.addEventListener('click',restart);
  const lost=e=>{e.preventDefault();dispose();};renderer.domElement.addEventListener('webglcontextlost',lost);
  function dispose(){
    if(disposed)return;disposed=true;cancelAnimationFrame(frame);ro.disconnect();io.disconnect();
    tabs.forEach(t=>t.removeEventListener('click',select));window.removeEventListener('scroll',scroll);window.removeEventListener('resize',resize);
    document.removeEventListener('visibilitychange',visibility);pauseButton.removeEventListener('click',pause);replay.removeEventListener('click',restart);
    renderer.domElement.removeEventListener('webglcontextlost',lost);
    const geometries=new Set();scene.traverse(o=>{if(o.geometry)geometries.add(o.geometry);});
    geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());targets.forEach(t=>t.dispose());
    renderer.dispose();renderer.domElement.remove();host.classList.remove('scene-ready');experience.classList.remove('experience-live');host.querySelector('.scene-controls').hidden=true;
  }
  host.classList.add('scene-ready');experience.classList.add('experience-live');host.querySelector('.scene-controls').hidden=false;
  interior.visible=false;network.visible=false;resize();return dispose;
}
