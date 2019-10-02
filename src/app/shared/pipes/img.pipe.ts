import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform( images: any[]): string {
    if(images && images.length > 0){
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
  }

}
