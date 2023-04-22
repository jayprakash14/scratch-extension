# scratch-extension
Install the sctatch-gui, scratch-vn and scratch-blocks repositories using 

git clone https://github.com/llk/scratch-gui
git clone https://github.com/llk/scratch-vm
git clone https://github.com/llk/scratch-blocks

Add the PictoBloxString folder to \scratch-gui\src\lib\libraries\extensions using 

cd .\scratch-gui\src\lib\libraries\extensions

Import the following code to index.jsx file in the extensions folder

import PictoBloxString from './PictoBloxString/index.jsx';
export default {
  PictoBloxString
};

Run npm start to start the development server.

npm start



