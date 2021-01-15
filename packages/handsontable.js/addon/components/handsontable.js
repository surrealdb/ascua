import Component from '@glimmer/component';
import { action } from '@ember/object';
import { arg } from '@ascua/decorators';
import Handsontable from 'handsontable';

export default class extends Component {

	@arg cols = undefined;

	@arg allowRemoveColumn = true;
	@arg allowRemoveRow = true;
	@arg autoColumnSize = { syncLimit: 50 };
	@arg autoRowSize = undefined;
	@arg autoWrapCol = true;
	@arg autoWrapRow = true;
	@arg colHeaders = null;
	@arg collapsibleColumns = undefined;
	@arg columnHeaderHeight = undefined;
	@arg columns = undefined;
	@arg columnSorting = undefined;
	@arg colWidths = undefined;
	@arg contextMenu = undefined;
	@arg copyable = true;
	@arg copyPaste = true;
	@arg data = undefined;
	@arg disableVisualSelection = false;
	@arg dropdownMenu = undefined;
	@arg enterBeginsEditing = true;
	@arg fillHandle = true;
	@arg filters = undefined;
	@arg fixedColumnsLeft = 0;
	@arg fixedRowsBottom = 0;
	@arg fixedRowsTop = 0;
	@arg formulas = false;
	@arg height = '100%';
	@arg licenseKey = 'non-commercial-and-evaluation';
	@arg manualColumnMove = undefined;
	@arg manualColumnResize = undefined;
	@arg manualRowMove = undefined;
	@arg manualRowResize = undefined;
	@arg minSpareCols = undefined;
	@arg minSpareRows = undefined;
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
			allowRemoveColumn: this.allowRemoveColumn,
			allowRemoveRow: this.allowRemoveRow,
			autoColumnSize: this.autoColumnSize,
			autoRowSize: this.autoRowSize,
			autoWrapCol: this.autoWrapCol,
			autoWrapRow: this.autoWrapRow,
			colHeaders: this.colHeaders || this.cols,
			collapsibleColumns: this.collapsibleColumns,
			columnHeaderHeight: this.columnHeaderHeight,
			columns: this.columns || this.cols.map(c => ({ data:c })),
			columnSorting: this.columnSorting,
			colWidths: this.colWidths,
			contextMenu: this.contextMenu,
			copyable: this.copyable,
			copyPaste: this.copyPaste,
			data: this.data,
			disableVisualSelection: this.disableVisualSelection,
			dropdownMenu: this.dropdownMenu,
			enterBeginsEditing: this.enterBeginsEditing,
			fillHandle: this.fillHandle,
			filters: this.filters,
			fixedColumnsLeft: this.fixedColumnsLeft,
			fixedRowsBottom: this.fixedRowsBottom,
			fixedRowsTop: this.fixedRowsTop,
			formulas: this.formulas,
			height: this.height,
			licenseKey: this.licenseKey,
			manualColumnMove: this.manualColumnMove,
			manualColumnResize: this.manualColumnResize,
			manualRowMove: this.manualRowMove,
			manualRowResize: this.manualRowResize,
			minSpareCols: this.minSpareCols,
			minSpareRows: this.minSpareRows,
			readOnly: this.readOnly,
			rowHeaders: this.rowHeaders,
			rowHeights: this.rowHeights,
			startCols: this.startCols,
			startRows: this.startRows,
			stretchH: this.stretchH,
			trimWhitespace: this.trimWhitespace,
			width: this.width,
			wordWrap: this.wordWrap,
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
