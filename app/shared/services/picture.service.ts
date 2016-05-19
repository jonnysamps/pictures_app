import {Injectable} from "angular2/core";
import {Picture} from "../models/picture";

@Injectable()
export class PictureService {
  private categoryMap: Object = {
    lions: [
      new Picture('1', 'http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/Q-Z/10%20Cool%20Things%20about%20Lions/cool-things-lions-9.jpg', 1600, 1067),
      new Picture('2', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/lion-male-roar.jpg', 1600, 900),
      new Picture('3', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/Federico_Veronesi_2009-01-28%20Masai%20Mara_4728.jpg?itok=96CysP6Y', 1000, 665),
      new Picture('4', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/lion_Theodore_mattis.jpg?itok=lAT56K6j', 892, 727),
      new Picture('5', 'http://cbs.umn.edu/sites/cbs.umn.edu/files/public/african_lion_king-wide_1.jpg', 1920, 1200),
      new Picture('6', 'http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/Q-Z/10%20Cool%20Things%20about%20Lions/cool-things-lions-9.jpg', 1600, 1067),
      new Picture('7', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/lion-male-roar.jpg', 1600, 900),
      new Picture('8', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/Federico_Veronesi_2009-01-28%20Masai%20Mara_4728.jpg?itok=96CysP6Y', 1000, 665),
      new Picture('9', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/lion_Theodore_mattis.jpg?itok=lAT56K6j', 892, 727),
      new Picture('10', 'http://cbs.umn.edu/sites/cbs.umn.edu/files/public/african_lion_king-wide_1.jpg', 1920, 1200),
      new Picture('11', 'http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/Q-Z/10%20Cool%20Things%20about%20Lions/cool-things-lions-9.jpg', 1600, 1067),
      new Picture('12', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/lion-male-roar.jpg', 1600, 900),
      new Picture('13', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/Federico_Veronesi_2009-01-28%20Masai%20Mara_4728.jpg?itok=96CysP6Y', 1000, 665),
      new Picture('14', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/lion_Theodore_mattis.jpg?itok=lAT56K6j', 892, 727),
      new Picture('15', 'http://cbs.umn.edu/sites/cbs.umn.edu/files/public/african_lion_king-wide_1.jpg', 1920, 1200),
      new Picture('16', 'http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/Q-Z/10%20Cool%20Things%20about%20Lions/cool-things-lions-9.jpg', 1600, 1067),
      new Picture('17', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/lion-male-roar.jpg', 1600, 900),
      new Picture('18', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/Federico_Veronesi_2009-01-28%20Masai%20Mara_4728.jpg?itok=96CysP6Y', 1000, 665),
      new Picture('19', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/lion_Theodore_mattis.jpg?itok=lAT56K6j', 892, 727),
      new Picture('20', 'http://cbs.umn.edu/sites/cbs.umn.edu/files/public/african_lion_king-wide_1.jpg', 1920, 1200),
      new Picture('21', 'http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/Q-Z/10%20Cool%20Things%20about%20Lions/cool-things-lions-9.jpg', 1600, 1067),
      new Picture('22', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/lion-male-roar.jpg', 1600, 900),
      new Picture('23', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/Federico_Veronesi_2009-01-28%20Masai%20Mara_4728.jpg?itok=96CysP6Y', 1000, 665),
      new Picture('24', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/lion_Theodore_mattis.jpg?itok=lAT56K6j', 892, 727),
      new Picture('25', 'http://cbs.umn.edu/sites/cbs.umn.edu/files/public/african_lion_king-wide_1.jpg', 1920, 1200),
      new Picture('26', 'http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/Q-Z/10%20Cool%20Things%20about%20Lions/cool-things-lions-9.jpg', 1600, 1067),
      new Picture('27', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/lion-male-roar.jpg', 1600, 900),
      new Picture('28', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/Federico_Veronesi_2009-01-28%20Masai%20Mara_4728.jpg?itok=96CysP6Y', 1000, 665),
      new Picture('29', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/lion_Theodore_mattis.jpg?itok=lAT56K6j', 892, 727),
      new Picture('30', 'http://cbs.umn.edu/sites/cbs.umn.edu/files/public/african_lion_king-wide_1.jpg', 1920, 1200),
    ],
    tigers: [
      new Picture('1', 'http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/Q-Z/10%20Cool%20Things%20about%20Lions/cool-things-lions-9.jpg', 1600, 1067),
      new Picture('2', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/lion-male-roar.jpg', 1600, 900),
      new Picture('3', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/Federico_Veronesi_2009-01-28%20Masai%20Mara_4728.jpg?itok=96CysP6Y', 1000, 665),
      new Picture('4', 'http://www.awf.org/sites/default/files/media/gallery/wildlife/Lion/lion_Theodore_mattis.jpg?itok=lAT56K6j', 892, 727),
      new Picture('5', 'http://cbs.umn.edu/sites/cbs.umn.edu/files/public/african_lion_king-wide_1.jpg', 1920, 1200),
    ]
  }

  byCategory(categoryId: string): Picture[] {
    return this.categoryMap[categoryId];
  }
}  
