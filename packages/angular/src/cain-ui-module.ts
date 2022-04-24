import { NgModule } from '@angular/core';
import { defineCustomElements } from '@cain-group/cain-ui/loader';

import * as d from './directives/proxies';

const CaComponents = [
  d.CaAside,
  d.CaButton,
  d.CaButtonGroup,
  d.CaCol,
  d.CaContainer,
  d.CaFooter,
  d.CaHeader,
  d.CaIcon,
  d.CaLink,
  d.CaMain,
  d.CaRow
];

defineCustomElements();

const DECLARATIONS = [
  // proxies
  ...CaComponents,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class CainUIModule {}
