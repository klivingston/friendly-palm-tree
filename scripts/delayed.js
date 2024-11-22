// add delayed functionality here
import { loadScript } from './aem.js';

async function loadShareWidget() { await loadScript('/widgets/share-button/share-button.js'); }
loadShareWidget();
