import Component from '@glimmer/component';
import { action } from '@ember/object';
import { arg } from '@ascua/decorators';
import Handsontable from 'handsontable';

export default class extends Component {

	@arg autoColumnSize = true;
	@arg autoWrapRow = true;
	@arg columnSorting = true;
	@arg colWidths = undefined;
	@arg contextMenu = false;
	@arg dropdownMenu = false;
	@arg filters = false;
	@arg formulas = false;
	@arg height = '100%';
	@arg licenseKey = 'non-commercial-and-evaluation';
	@arg manualColumnMove = true;
	@arg manualColumnResize = true;
	@arg manualRowMove = true;
	@arg manualRowResize = true;
	@arg minSpareCols = undefined;
	@arg minSpareRows = undefined;
	@arg multiSelect = true;
	@arg readOnly = false;
	@arg rowHeaders = true;
	@arg rowHeights = undefined;
	@arg startCols = undefined;
	@arg startRows = undefined;
	@arg stretchH = 'all'
	@arg trimWhitespace = true;
	@arg width = '100%';
	@arg wordWrap = false;

	@action didCreate(element) {

		if (!Handsontable) return;

		this.instance = new Handsontable(element, {
			autoColumnSize: this.autoColumnSize,
			autoWrapRow: this.autoWrapRow,
			columnSorting: this.columnSorting,
			colWidths: this.colWidths,
			contextMenu: this.contextMenu,
			dropdownMenu: this.dropdownMenu,
			filters: this.filters,
			formulas: this.formulas,
			height: this.height,
			licenseKey: this.licenseKey,
			manualColumnMove: this.manualColumnMove,
			manualColumnResize: this.manualColumnResize,
			manualRowMove: this.manualRowMove,
			manualRowResize: this.manualRowResize,
			minSpareCols: this.minSpareCols,
			minSpareRows: this.minSpareRows,
			multiSelect: this.multiSelect,
			readOnly: this.readOnly,
			rowHeaders: this.rowHeaders,
			rowHeights: this.rowHeights,
			startCols: this.startCols,
			startRows: this.startRows,
			stretchH: this.stretchH,
			trimWhitespace: this.trimWhitespace,
			width: this.width,
			wordWrap: this.wordWrap,
			data: this.args.rows,
			colHeaders: (c) => {
				return this.args.cols[c];
			},
		});

		this.rows = this.args.rows;

	}

	@action didChange(element, cols, rows) {

		if (!Handsontable) return;

		if (this.rows != this.args.rows) {

			this.instance.loadData(this.args.rows);

			this.instance.render();

			this.rows = this.args.rows;

		}

	}

	@action willDelete() {

		if (!Handsontable) return;

		this.instance.destroy();

	}

}
