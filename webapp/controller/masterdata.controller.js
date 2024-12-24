sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, UIComponent, JSONModel) {
        "use strict";

        return Controller.extend("zmastercard.zmastercard.controller.masterdata", {
            onInit: function () {
                UIComponent.getRouterFor(this).getRoute('masterdata').attachPatternMatched(this._onRouteMatch, this);
                this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel1");
                this.getView().getModel("oTableDataModel1").setProperty("/aTableData1", []);
            },
            _onRouteMatch: function (oEvent) {
                var oBusyDialog = new sap.m.BusyDialog({
                    text: "Please wait"
                  });
                  oBusyDialog.open();
                this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel1");
                this.getView().getModel("oTableDataModel1").setProperty("/aTableData1", []);
                var TableModel1 = this.getView().getModel("oTableDataModel1");
                var aTableArr1 = TableModel1.getProperty("/aTableData1");
                var aTablearr1 = [];
                var oCommonModel = this.getOwnerComponent().getModel('oCommonModel');
                var cardno = oCommonModel.getProperty('/displayObject').cardno;
                var oModel = this.getView().getModel();
                var oFilter = new sap.ui.model.Filter("Zpno", "EQ", cardno);
                var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZAUTO_BOM_V2_BIN");
                oModel.read("/Auto_Bom", {
                  filters: [oFilter],
                  success: function (oresponse) {
                    oresponse.results.map(function (data1) {
                        var obj1 = {
                            Zpno: data1.Zpno,
                            DyeSort: data1.DyeSort,
                            Zpqlycode: data1.Zpqlycode,
                            Pattern: data1.Pattern,
                            Grp: data1.Grp,
                            Zpmtype: data1.Zpmtype,
                            Zpmyqlty: data1.Zpmyqlty,
                            Wpmtr: data1.Wpmtr,
                        }
                        aTableArr1.push(obj1);
                        TableModel1.setProperty("/aTableData1", aTableArr1)
                      })
                      oBusyDialog.close();
                  }.bind(this)
                })
            },
            addrow:function(){

                var TableModel1 = this.getView().getModel("oTableDataModel1");
                var aTableArr1 = TableModel1.getProperty("/aTableData1");
                var obj1 = {
                    Zpno: "",
                    DyeSort: "",
                    Zpqlycode: "",
                    Pattern: "",
                    Grp: "",
                    Zpmtype: "",
                    Zpmyqlty: "",
                    Wpmtr: "",
                }
                aTableArr1.push(obj1);
                TableModel1.setProperty("/aTableData1", aTableArr1)

            },
            savedata: function () {
                var oBusyDialog = new sap.m.BusyDialog({
                    text: "Please wait"
                });
                oBusyDialog.open();
                var table1 = this.getView().getModel("oTableDataModel1").getProperty("/aTableData1");
                this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel2");
                this.getView().getModel("oTableDataModel2").setProperty("/aTableData2", []);
                var aTablearr2 = Tablarv().getModel("oTableDataModel2");
                TableModel2 = this.getVieweModel2.getProperty("/aTableData2")

                    var aTablearr2 = [];
                    table1.map(function (data1){
                    var items2 = {
                            Zpno: data1.Zpno,
                            DyeSort: data1.DyeSort,
                            Zpqlycode: data1.Zpqlycode,
                            Pattern: data1.Pattern,
                            Grp: data1.Grp,
                            Zpmtype: data1.Zpmtype,
                            Zpmyqlty: data1.Zpmyqlty,
                            Wpmtr: data1.Wpmtr,

                        }
                        aTablearr2.push(items2);
                        TableModel2.setProperty("/aTableData2", aTablearr2)
                        
                    })
                    var url = "/sap/bc/http/sap/zpack_311_bapi?sap-client=080";
                    $.ajax({
                        type: "post",
                        url: url,
                        data: JSON.stringify({
                            aTablearr2
                        }),
                        contentType: "application/json; charset=utf-8",
                        traditional: true,
                        success: function (data) {
                            oBusyDialog.close();
                            MessageBox.alert(data);
                        }.bind(this),
                        error: function (error) {
                            oBusyDialog.close();
                            MessageBox.error(error);
                        }

                    })
                

            },

         
        });
    });