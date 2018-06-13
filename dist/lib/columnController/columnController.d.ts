// Type definitions for ag-grid v18.0.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { ColumnGroup } from "../entities/columnGroup";
import { Column } from "../entities/column";
import { ColDef, ColGroupDef, IAggFunc } from "../entities/colDef";
import { ColumnGroupChild } from "../entities/columnGroupChild";
import { OriginalColumnGroupChild } from "../entities/originalColumnGroupChild";
import { ColumnEventType } from "../events";
import { OriginalColumnGroup } from "../entities/originalColumnGroup";
import { RowNode } from "../entities/rowNode";
export interface ColumnResizeSet {
    columns: Column[];
    ratios: number[];
    width: number;
}
export interface ColumnState {
    colId: string;
    hide: boolean;
    aggFunc: string | IAggFunc;
    width: number;
    pivotIndex: number;
    pinned: string;
    rowGroupIndex: number;
}
export declare class ColumnController {
    private gridOptionsWrapper;
    private expressionService;
    private balancedColumnTreeBuilder;
    private displayedGroupCreator;
    private autoWidthCalculator;
    private eventService;
    private columnUtils;
    private context;
    private columnAnimationService;
    private autoGroupColService;
    private aggFuncService;
    private valueCache;
    private columnApi;
    private gridApi;
    private primaryBalancedTree;
    private primaryHeaderRowCount;
    private primaryColumns;
    private secondaryBalancedTree;
    private secondaryColumns;
    private secondaryHeaderRowCount;
    private secondaryColumnsPresent;
    private columnsForQuickFilter;
    private gridBalancedTree;
    private gridColumns;
    private gridHeaderRowCount;
    private lastPrimaryOrder;
    private gridColsArePrimary;
    private displayedLeftColumnTree;
    private displayedRightColumnTree;
    private displayedCentreColumnTree;
    private displayedLeftHeaderRows;
    private displayedRightHeaderRows;
    private displayedCentreHeaderRows;
    private displayedLeftColumns;
    private displayedRightColumns;
    private displayedCenterColumns;
    private allDisplayedColumns;
    private allDisplayedVirtualColumns;
    private allDisplayedCenterVirtualColumns;
    private colSpanActive;
    private autoRowHeightColumns;
    private suppressColumnVirtualisation;
    private rowGroupColumns;
    private valueColumns;
    private pivotColumns;
    private groupAutoColumns;
    private groupDisplayColumns;
    private ready;
    private logger;
    private autoGroupsNeedBuilding;
    private pivotMode;
    private usingTreeData;
    private scrollWidth;
    private scrollPosition;
    private bodyWidth;
    private leftWidth;
    private rightWidth;
    private bodyWidthDirty;
    private viewportLeft;
    private viewportRight;
    init(): void;
    isAutoRowHeightActive(): boolean;
    getAllAutoRowHeightCols(): Column[];
    private setVirtualViewportLeftAndRight();
    getDisplayedColumnsStartingAt(column: Column): Column[];
    private checkDisplayedVirtualColumns();
    setVirtualViewportPosition(scrollWidth: number, scrollPosition: number): void;
    isPivotMode(): boolean;
    private isPivotSettingAllowed(pivot);
    setPivotMode(pivotMode: boolean, source?: ColumnEventType): void;
    getSecondaryPivotColumn(pivotKeys: string[], valueColKey: Column | string): Column;
    private setBeans(loggerFactory);
    private setFirstRightAndLastLeftPinned(source);
    autoSizeColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    autoSizeColumn(key: string | Column, source?: ColumnEventType): void;
    autoSizeAllColumns(source?: ColumnEventType): void;
    private getColumnsFromTree(rootColumns);
    getAllDisplayedColumnGroups(): ColumnGroupChild[];
    getPrimaryColumnTree(): OriginalColumnGroupChild[];
    getHeaderRowCount(): number;
    getLeftDisplayedColumnGroups(): ColumnGroupChild[];
    getRightDisplayedColumnGroups(): ColumnGroupChild[];
    getCenterDisplayedColumnGroups(): ColumnGroupChild[];
    getDisplayedColumnGroups(type: string): ColumnGroupChild[];
    isColumnDisplayed(column: Column): boolean;
    getAllDisplayedColumns(): Column[];
    getAllDisplayedVirtualColumns(): Column[];
    getDisplayedLeftColumnsForRow(rowNode: RowNode): Column[];
    getDisplayedRightColumnsForRow(rowNode: RowNode): Column[];
    private getDisplayedColumnsForRow(rowNode, displayedColumns, filterCallback?, emptySpaceBeforeColumn?);
    getAllDisplayedCenterVirtualColumnsForRow(rowNode: RowNode): Column[];
    private isColumnInViewport(col);
    getPinnedLeftContainerWidth(): number;
    getPinnedRightContainerWidth(): number;
    updatePrimaryColumnList(keys: (string | Column)[], masterList: Column[], actionIsAdd: boolean, columnCallback: (column: Column) => void, eventType: string, source?: ColumnEventType): void;
    setRowGroupColumns(colKeys: (string | Column)[], source?: ColumnEventType): void;
    private setRowGroupActive(active, column, source);
    addRowGroupColumn(key: string | Column, source?: ColumnEventType): void;
    addRowGroupColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    removeRowGroupColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    removeRowGroupColumn(key: string | Column, source?: ColumnEventType): void;
    addPivotColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    setPivotColumns(colKeys: (string | Column)[], source?: ColumnEventType): void;
    addPivotColumn(key: string | Column, source?: ColumnEventType): void;
    removePivotColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    removePivotColumn(key: string | Column, source?: ColumnEventType): void;
    private setPrimaryColumnList(colKeys, masterList, eventName, columnCallback, source);
    setValueColumns(colKeys: (string | Column)[], source?: ColumnEventType): void;
    private setValueActive(active, column, source);
    addValueColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    addValueColumn(colKey: (string | Column), source?: ColumnEventType): void;
    removeValueColumn(colKey: (string | Column), source?: ColumnEventType): void;
    removeValueColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    private normaliseColumnWidth(column, newWidth);
    private getPrimaryOrGridColumn(key);
    setColumnWidth(key: string | Column, newWidth: number, takeFromAdjacent: boolean, finished: boolean, source?: ColumnEventType): void;
    private checkMinAndMaxWidthsForSet(columnResizeSet);
    resizeColumnSets(resizeSets: ColumnResizeSet[], finished: boolean, source: ColumnEventType): void;
    setColumnAggFunc(column: Column, aggFunc: string, source?: ColumnEventType): void;
    moveRowGroupColumn(fromIndex: number, toIndex: number, source?: ColumnEventType): void;
    moveColumns(columnsToMoveKeys: (string | Column)[], toIndex: number, source?: ColumnEventType): void;
    doesMovePassRules(columnsToMove: Column[], toIndex: number): boolean;
    doesMovePassLockedPositions(proposedColumnOrder: Column[]): boolean;
    doesMovePassMarryChildren(allColumnsCopy: Column[]): boolean;
    moveColumn(key: string | Column, toIndex: number, source?: ColumnEventType): void;
    moveColumnByIndex(fromIndex: number, toIndex: number, source?: ColumnEventType): void;
    getBodyContainerWidth(): number;
    getContainerWidth(pinned: string): number;
    private updateBodyWidths();
    getValueColumns(): Column[];
    getPivotColumns(): Column[];
    isPivotActive(): boolean;
    getRowGroupColumns(): Column[];
    getDisplayedCenterColumns(): Column[];
    getDisplayedLeftColumns(): Column[];
    getDisplayedRightColumns(): Column[];
    getDisplayedColumns(type: string): Column[];
    getAllPrimaryColumns(): Column[];
    getAllColumnsForQuickFilter(): Column[];
    getAllGridColumns(): Column[];
    isEmpty(): boolean;
    isRowGroupEmpty(): boolean;
    setColumnVisible(key: string | Column, visible: boolean, source?: ColumnEventType): void;
    setColumnsVisible(keys: (string | Column)[], visible: boolean, source?: ColumnEventType): void;
    setColumnPinned(key: string | Column, pinned: string | boolean, source?: ColumnEventType): void;
    setColumnsPinned(keys: (string | Column)[], pinned: string | boolean, source?: ColumnEventType): void;
    private actionOnGridColumns(keys, action, source, createEvent?);
    getDisplayedColBefore(col: Column): Column;
    getDisplayedColAfter(col: Column): Column;
    getDisplayedGroupAfter(columnGroup: ColumnGroup): ColumnGroup;
    isPinningLeft(): boolean;
    isPinningRight(): boolean;
    getPrimaryAndSecondaryAndAutoColumns(): Column[];
    private createStateItemFromColumn(column);
    getColumnState(): ColumnState[];
    private orderColumnStateList(columnStateList);
    resetColumnState(source?: ColumnEventType): void;
    setColumnState(columnState: ColumnState[], source?: ColumnEventType): boolean;
    private sortColumnListUsingIndexes(indexes, colA, colB);
    private syncColumnWithNoState(column, source);
    private syncColumnWithStateItem(column, stateItem, rowGroupIndexes, pivotIndexes, source);
    getGridColumns(keys: (string | Column)[]): Column[];
    private getColumns(keys, columnLookupCallback);
    getColumnWithValidation(key: string | Column): Column;
    getPrimaryColumn(key: string | Column): Column;
    getGridColumn(key: string | Column): Column;
    private getColumn(key, columnList);
    private getAutoColumn(key);
    private columnsMatch(column, key);
    getDisplayNameForColumn(column: Column, location: string, includeAggFunc?: boolean): string;
    getDisplayNameForOriginalColumnGroup(columnGroup: ColumnGroup, originalColumnGroup: OriginalColumnGroup, location: string): string;
    getDisplayNameForColumnGroup(columnGroup: ColumnGroup, location: string): string;
    private getHeaderName(colDef, column, columnGroup, originalColumnGroup, location);
    private wrapHeaderNameWithAggFunc(column, headerName);
    getColumnGroup(colId: string | ColumnGroup, instanceId?: number): ColumnGroup;
    setColumnDefs(columnDefs: (ColDef | ColGroupDef)[], source?: ColumnEventType): void;
    isReady(): boolean;
    private extractRowGroupColumns(source);
    private extractPivotColumns(source);
    resetColumnGroupState(source?: ColumnEventType): void;
    getColumnGroupState(): {
        groupId: string;
        open: boolean;
    }[];
    setColumnGroupState(stateItems: {
        groupId: string;
        open: boolean;
    }[], source?: ColumnEventType): void;
    setColumnGroupOpened(key: OriginalColumnGroup | string, newValue: boolean, source?: ColumnEventType): void;
    getOriginalColumnGroup(key: OriginalColumnGroup | string): OriginalColumnGroup;
    private calculateColumnsForDisplay();
    private checkColSpanActiveInCols(columns);
    private calculateColumnsForGroupDisplay();
    getGroupDisplayColumns(): Column[];
    private updateDisplayedColumns(source);
    isSecondaryColumnsPresent(): boolean;
    setSecondaryColumns(colDefs: (ColDef | ColGroupDef)[], source?: ColumnEventType): void;
    private processSecondaryColumnDefinitions(colDefs);
    private updateGridColumns();
    private orderGridColsLikeLastPrimary();
    isPrimaryColumnGroupsPresent(): boolean;
    private setupQuickFilterColumns();
    private putFixedColumnsFirst();
    private addAutoGroupToGridColumns();
    private clearDisplayedColumns();
    private updateGroupsAndDisplayedColumns(source);
    private updateDisplayedColumnsFromTrees(source);
    private setupAllDisplayedColumns();
    private setLeftValues(source);
    private setLeftValuesOfColumns(source);
    private setLeftValuesOfGroups();
    private addToDisplayedColumns(displayedColumnTree, displayedColumns);
    private updateDisplayedCenterVirtualColumns();
    getVirtualHeaderGroupRow(type: string, dept: number): ColumnGroupChild[];
    private updateDisplayedVirtualGroups(virtualColIds);
    private updateVirtualSets();
    private filterOutColumnsWithinViewport();
    sizeColumnsToFit(gridWidth: any, source?: ColumnEventType): void;
    private buildDisplayedTrees(visibleColumns);
    private updateOpenClosedVisibilityInColumnGroups();
    getGroupAutoColumns(): Column[];
    private createGroupAutoColumnsIfNeeded();
    private createValueColumns(source);
    private getWidthOfColsInList(columnList);
    getGridBalancedTree(): OriginalColumnGroupChild[];
}
