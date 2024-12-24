sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, UIComponent, JSONModel,MessageBox) {
        "use strict";

        return Controller.extend("zmastercard.zmastercard.controller.View1", {
            onInit: function () {
                var omastercard = {
                    omastercard: false,
                }
                this.getOwnerComponent().setModel(new sap.ui.model.json.JSONModel(omastercard), "oCommonModel");
            },
            onChangeAction: function (oEvent) {
                var oCommonModel = this.getOwnerComponent().getModel('oCommonModel');
                if (oEvent.getSource().getSelectedButton().getText() !== 'Create') {
                    oCommonModel.setProperty("/omastercard", true);
                }
                else {
                    oCommonModel.setProperty("/omastercard", false);
                    this.getView().byId('mastcard').setValue("");
                }
            },
            onPress: function (e) {
                var cardno = this.getView().byId("mastcard").getValue();
                var radiobutton = this.getView().byId("idActionRadioBtnGroup").getSelectedButton().getText();
                 if(radiobutton === ""){
                   MessageBox.error("Please Select Radiobutton");
                 }
                 else if(radiobutton != "Create" && cardno ===""){
                    MessageBox.error("Please Enter Master Card No.");
                 }
                 else{
                    var oCommonModel = this.getOwnerComponent().getModel('oCommonModel');
                    var oDisplay = {
                        cardno: cardno,
                        Action: radiobutton,
                    };
                    oCommonModel.setProperty('/displayObject', oDisplay);
                    if (radiobutton == "Create") {
                        UIComponent.getRouterFor(this).navTo("carddetails");
                    } else if (radiobutton == "Change") {
                        UIComponent.getRouterFor(this).navTo("carddetails");
                    } else if (radiobutton == "Display") {
                        UIComponent.getRouterFor(this).navTo("carddetails");
                    }  else if (radiobutton == "Copy Program Code") {
                        UIComponent.getRouterFor(this).navTo("carddetails");
                    }
                    else if (radiobutton == "Copy Warp/weft Patern") {
                        UIComponent.getRouterFor(this).navTo("carddetails");
                    }
                    else if (radiobutton == "Copy Draft/Peg Pattern") {
                        UIComponent.getRouterFor(this).navTo("carddetails");
                    }


                    // else if (radiobutton == "Print") {
    
                    // }
                    // else if (radiobutton == "PP Master Data") {
                    //     UIComponent.getRouterFor(this).navTo("masterdata");
                    // }

                 }
               
            },
            handlef4: function () {
                var oBusyDialog = new sap.m.BusyDialog({
                    text: "Please wait"
                });
                oBusyDialog.open();
                var dataModel = this.getOwnerComponent().getModel('dataModel');
                var oInput1 = this.getView().byId("mastcard");

                if (!this._oValueHelpDialog) {
                    this._oValueHelpDialog = new sap.ui.comp.valuehelpdialog.ValueHelpDialog("mastcard", {
                        supportMultiselect: false,
                        supportRangesOnly: false,
                        enableBasicSearch:"true",
                        stretch: sap.ui.Device.system.phone,
                        keys: "mastcard",
                        descriptionKey: "mastcard",
                        filtermode: "true",
                        ok: function (oEvent) {
                            var valueset = oEvent.mParameters.tokens[0].mAggregations.customData[0].mProperties.value.Zpno;
                            oInput1.setValue(valueset);
                            this.close();
                        },
                        cancel: function () {
                            this.close();
                        }
                    });
                }


                var oFilterBar = new sap.ui.comp.filterbar.FilterBar({
                    advancedMode: true,
                    filterBarExpanded: true,
                    showClearButton:true,
                    showRestoreButton:true,
                    showFilterConfiguration:true,
                    showClearOnFB:true,
                    isRunningInValueHelpDialog:true,
                    filterGroupItems: [new sap.ui.comp.filterbar.FilterGroupItem({ groupTitle: "foo", groupName: "gn1", name: "n1", label: "Master Card", control: new sap.m.Input() }),
                    new sap.ui.comp.filterbar.FilterGroupItem({ groupTitle: "foo", groupName: "gn1", name: "n2", label: "Quality Code", control: new sap.m.Input() }),
                    new sap.ui.comp.filterbar.FilterGroupItem({ groupTitle: "foo", groupName: "gn1", name: "n3", label: "Quality Desc.", control: new sap.m.Input() }),
                    new sap.ui.comp.filterbar.FilterGroupItem({ groupTitle: "foo", groupName: "gn1", name: "n4", label: "Plant", control: new sap.m.Input() })],




                    search: function (oEvt) {
                        oBusyDialog.open();
                         var oParams = oEvt.getParameter("/ChangeQualityF4");
                        var Zpno = oEvt.mParameters.selectionSet[0].mProperties.value;
                        var Zpqlycode = oEvt.mParameters.selectionSet[1].mProperties.value;
                        var ProductDescription = oEvt.mParameters.selectionSet[2].mProperties.value;
                        var Plant = oEvt.mParameters.selectionSet[3].mProperties.value;
                        // if threee no  values 
                        if (Zpqlycode === "" && Zpno === "" && ProductDescription ==="" && Plant === "") {
                            oTable.bindRows({
                                path: "/ChangeQualityF4"
                            });
                        }
                        //    if zpno  value is insert then search  under block
                        else if (Zpqlycode === "" && ProductDescription ==="" && Plant === "" && Zpno != "") {
                            oTable.bindRows({
                                path: "/ChangeQualityF4", filters: [
                                    new sap.ui.model.Filter("Zpno", sap.ui.model.FilterOperator.Contains, Zpno)]
                            });
                        }
                        else if (Zpqlycode != "" && ProductDescription ==="" && Plant === "" && Zpno != "") {
                            oTable.bindRows({
                                path: "/ChangeQualityF4", filters: [
                                    new sap.ui.model.Filter("Zpno", sap.ui.model.FilterOperator.Contains, Zpno),
                                    new sap.ui.model.Filter("Zpqlycode", sap.ui.model.FilterOperator.Contains, Zpqlycode)]
                            });
                        }
                        else if (Zpqlycode === "" && ProductDescription !="" && Plant === "" && Zpno != "") {
                            oTable.bindRows({
                                path: "/ChangeQualityF4", filters: [
                                    new sap.ui.model.Filter("Zpno", sap.ui.model.FilterOperator.Contains, Zpno),
                                    new sap.ui.model.Filter("ProductDescription", sap.ui.model.FilterOperator.Contains, ProductDescription)]
                            });
                        }
                        else if (Zpqlycode === "" && ProductDescription ==="" && Plant != "" && Zpno != "") {
                            oTable.bindRows({
                                path: "/ChangeQualityF4", filters: [
                                    new sap.ui.model.Filter("Zpno", sap.ui.model.FilterOperator.Contains, Zpno),
                                    new sap.ui.model.Filter("Zpunit", sap.ui.model.FilterOperator.Contains, Plant)]
                            });
                        }
                        else if (Zpqlycode === "" && ProductDescription ==="" && Plant != "" && Zpno === "") {
                            oTable.bindRows({
                                path: "/ChangeQualityF4", filters: [
                                    new sap.ui.model.Filter("Zpunit", sap.ui.model.FilterOperator.Contains, Plant)]
                            });
                        }
                        else if (Zpqlycode != "" && ProductDescription ==="" && Plant != "" && Zpno === "") {
                            oTable.bindRows({
                                path: "/ChangeQualityF4", filters: [
                                    new sap.ui.model.Filter("Zpunit", sap.ui.model.FilterOperator.Contains, Plant),
                                    new sap.ui.model.Filter("Zpqlycode", sap.ui.model.FilterOperator.Contains, Zpqlycode)]
                            });
                        }
                        else if (Zpqlycode === "" && ProductDescription !="" && Plant != "" && Zpno === "") {
                            oTable.bindRows({
                                path: "/ChangeQualityF4", filters: [
                                    new sap.ui.model.Filter("Zpunit", sap.ui.model.FilterOperator.Contains, Plant),
                                    new sap.ui.model.Filter("ProductDescription", sap.ui.model.FilterOperator.Contains, ProductDescription)]
                            });
                        }
                        else if (Zpqlycode === "" && ProductDescription !="" && Plant === "" && Zpno === "") {
                            oTable.bindRows({
                                path: "/ChangeQualityF4", filters: [
                                    new sap.ui.model.Filter("ProductDescription", sap.ui.model.FilterOperator.Contains, ProductDescription)]
                            });
                        }
                        else if (Zpqlycode != "" && ProductDescription !="" && Plant === "" && Zpno === "") {
                            oTable.bindRows({
                                path: "/ChangeQualityF4", filters: [
                                    new sap.ui.model.Filter("ProductDescription", sap.ui.model.FilterOperator.Contains, ProductDescription),
                                    new sap.ui.model.Filter("Zpqlycode", sap.ui.model.FilterOperator.Contains, Zpqlycode)]
                            });
                        }
                        else if (Zpqlycode != "" && ProductDescription !="" && Plant != "" && Zpno === "") {
                            oTable.bindRows({
                                path: "/ChangeQualityF4", filters: [
                                    new sap.ui.model.Filter("ProductDescription", sap.ui.model.FilterOperator.Contains, ProductDescription),
                                    new sap.ui.model.Filter("Zpqlycode", sap.ui.model.FilterOperator.Contains, Zpqlycode),
                                    new sap.ui.model.Filter("Zpunit", sap.ui.model.FilterOperator.Contains, Plant)]
                            });
                        }
                        else if (Zpqlycode != "" && ProductDescription !="" && Plant != "" && Zpno != "") {
                            oTable.bindRows({
                                path: "/ChangeQualityF4", filters: [
                                    new sap.ui.model.Filter("ProductDescription", sap.ui.model.FilterOperator.Contains, ProductDescription),
                                    new sap.ui.model.Filter("Zpqlycode", sap.ui.model.FilterOperator.Contains, Zpqlycode),
                                    new sap.ui.model.Filter("Zpunit", sap.ui.model.FilterOperator.Contains, Plant),
                                    new sap.ui.model.Filter("Zpno", sap.ui.model.FilterOperator.Contains, Zpno)]
                            });
                        }
                        
                       

                        oBusyDialog.close();
                    }
                });

                this._oValueHelpDialog.setFilterBar(oFilterBar);
                var oColModel = new sap.ui.model.json.JSONModel();
                oColModel.setData({
                    cols: [
                        { label: "Plant", template: "Zpunit" },
                        { label: "Master Card No.", template: "Zpno" },
                        { label: "Quality Code", template: "Zpqlycode" },
                        { label: "Quality Desc.", template: "ProductDescription" },
                        { label: "Dyeing Sort", template: "DyeSort" },
                       

                    ]
                });
                var oTable = this._oValueHelpDialog.getTable();
                oTable.setModel(oColModel, "columns");
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZMASTER_CARD_SERVICE_BIN");
                oTable.setModel(oModel);
                oBusyDialog.close();
                this._oValueHelpDialog.open();
            },
            onBack: function () {
                var sPreviousHash = History.getInstance().getPreviousHash();
                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    this.getOwnerComponent().getRouter().navTo("page1", null, true);
                }
            },
        });
    });
