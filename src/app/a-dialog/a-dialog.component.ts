import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <h2>TC Reproduction for AFNet</h2>   
   <div id="tcDialog">.</div> 
  `,
  styles: []
})
export class ADialogComponent implements AfterViewInit { 

  async ngAfterViewInit() {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;

    const scriptText = `TCWidget.init({
         apikey: "47c64b9f17b26489d3858b22c650c079",
         container: 'tcDialog',
         apiBaseUrl: 'https://devdemo.tireconnect.ca/api/v2/'
       }).then(widget => {
        widget.searchByPartNumbers({
          part_numbers: [90112],
          location_id: 12919,
          filters: { },
        }, {	
              defaultSelectedQty: 4,
              minQtyInResults: 4,
              autoRedirectToSummary: true
        })
       })`; 
      
       script.text = scriptText;
       document.getElementsByTagName('head')[0].appendChild(script);
  } 

}
