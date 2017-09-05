import models0_104 from './models0_104.json';
import models105_176 from './models105_176.json';
import models177_202 from './models177_202.json';
import models203_231 from './models203_231.json';
import models232_270 from './models232_270.json';
import models271_300 from './models271_300.json';
import models301_384 from './models301_384.json';
import models401_413 from './models401_413.json';
import models414_426 from './models414_426.json';
import models435_442 from './models435_442.json';
import models443_455 from './models443_455.json';
import models456_473 from './models456_473.json';
import models474_486 from './models474_486.json';
import models487_499 from './models487_499.json';
import models500_512 from './models500_512.json';
import models513_527 from './models513_527.json';
import models528_539 from './models528_539.json';
import models540_547 from './models540_547.json';
import models548_559 from './models548_559.json';
import models560_572 from './models560_572.json';
import models581_593 from './models581_593.json';
import models594_606 from './models594_606.json';
import models607_619 from './models607_619.json';
import models620_632 from './models620_632.json';
import models633_644 from './models633_644.json';
import models645_656 from './models645_656.json';
import models657_668 from './models657_668.json';


const shuffleArray = (array) => {
	let currentIndex = array.length;
	let temporary;
	let toIndex;

	while (currentIndex) {
		toIndex = Math.floor(Math.random() * currentIndex--);
		temporary = array[currentIndex];
		array[currentIndex] = array[toIndex];
		array[toIndex] = temporary;
	}

	return array;
};

let operatinData = [
	models0_104,
	models105_176,
	models177_202,
	models203_231,
	models232_270,
	models271_300,
	models301_384,
	models401_413,
	models414_426,
	models435_442,
	models443_455,
	models456_473,
	models474_486,
	models487_499,
	models500_512,
	models513_527,
	models528_539,
	models540_547,
	models548_559,
	models560_572,
	models581_593,
	models594_606,
	models607_619,
	models620_632,
	models633_644,
	models645_656,
	models657_668
];

operatinData = shuffleArray(operatinData);

let sourcedata = [];

for (let i = 0; i < operatinData.length; i += 1) {
	sourcedata = [...sourcedata, ...operatinData[i]];
}

export default sourcedata;
