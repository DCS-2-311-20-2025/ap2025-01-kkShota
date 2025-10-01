//
// 応用プログラミング 課題３．１
//
"use strict"; // 厳格モード

import * as THREE from 'three'

// ３Ｄページ作成関数の定義
function init() {
  // シーン作成
  const scene = new THREE.Scene();

  // 座標軸の設定
  //const axes = new THREE.AxesHelper(18);
  //scene.add(axes);

  // /* 平面の設定
  const planeGeometry = new THREE.PlaneGeometry(32, 16);
  const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x606060});
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  scene.add(plane);
  /**/

  // 箱1の表示設定
  const box1Geometry = new THREE.BoxGeometry(8, 8, 8);
  const box1Material = new THREE.MeshLambertMaterial({ color: 0x008060});
  const box1 = new THREE.Mesh(box1Geometry, box1Material);
  box1.position.y = 4;
  scene.add(box1);
  // 箱2の表示設定
  const box2Geometry = new THREE.BoxGeometry(8, 4, 2);
  const box2Material = new THREE.MeshLambertMaterial({ color: 0xFF8000});
  const box2 = new THREE.Mesh(box2Geometry, box2Material);
    
  box2.position.x = 10;
  box2.position.y = 3;
  scene.add(box2);
  //箱3の表示設定
  const box3Geometry = new THREE.BoxGeometry(2, 2, 2);
  const box3Material = new THREE.MeshLambertMaterial({ color: 0xFF0000});
  const box3 = new THREE.Mesh(box3Geometry, box3Material);
    
  box3.position.x = 10;
  box3.position.y = 6;

  scene.add(box3);

  //光源の設定
  const spotLight = new THREE.SpotLight(0xffffff, 1000);
  spotLight.position.set(24, 16, 8);
  scene.add(spotLight);

  // カメラの設定
  const camera = new THREE.PerspectiveCamera(
    60, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.x = 32;
  camera.position.y = 14;
  camera.position.z = 12;
  camera.lookAt(10, 6, 4);

  // レンダラの設定
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0x808080 );
  document.getElementById("WebGL-output")
    .appendChild(renderer.domElement);

  // 描画
  renderer.render(scene, camera);
}

document.onload = init();
