import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  template: `<h1>What We Do</h1><br><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    <h1>About Us</h1><br><p>Mauris commodo ac augue vel accumsan. turpis odio mollis nisl,odo ac augue vel accumsan. turpis od   eleifend fringilla tellus, id efficitur dui pulvinar id. Duis quis urna ut ipsum sollicitudin varius eget a lorem. Fusce ultrices cursus purus tincidunt ultricies. Vestibulum at lacinia neque, tempus eleifend ligula.Donec dignissim mi risus, at tincidunt justo ullamcorper vel. In volutpat vehicula libero, non varius ligula. .  lacus quis lacinia nunc. Ut</p>
`,
})
export class AboutComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
