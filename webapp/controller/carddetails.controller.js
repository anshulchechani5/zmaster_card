sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment",
  ],
  function (BaseController, UIComponent, JSONModel, MessageBox, Fragment) {
    "use strict";

    return BaseController.extend("zmastercard.zmastercard.carddetails", {
      onInit() {


        UIComponent.getRouterFor(this).getRoute('carddetails').attachPatternMatched(this._onRouteMatch, this);

        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel");
        this.getView().getModel("oTableDataModel").setProperty("/aTableData", []);

        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel1");
        this.getView().getModel("oTableDataModel1").setProperty("/aTableData1", []);

        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel2");
        this.getView().getModel("oTableDataModel2").setProperty("/aTableData2", []);

        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel3");
        this.getView().getModel("oTableDataModel3").setProperty("/aTableData3", []);

        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel4");
        this.getView().getModel("oTableDataModel4").setProperty("/aTableData4", []);

        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel5");
        this.getView().getModel("oTableDataModel5").setProperty("/aTableData5", []);

        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel6");
        this.getView().getModel("oTableDataModel6").setProperty("/aTableData6", []);

        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel7");
        this.getView().getModel("oTableDataModel7").setProperty("/aTableData7", []);

        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel8");
        this.getView().getModel("oTableDataModel8").setProperty("/aTableData8", []);

        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oBatchData")
        this.getView().getModel("oBatchData").setProperty("/aData", [])
        var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZMASTER_CARD_SERVICE_BIN");
        oModel.read("/ZPC_HEADERMASTER", {
          urlParameters: { "$top": "50000" },
          success: function (oresponse) {
            this.getView().getModel("oBatchData").setProperty("/aData", oresponse.results)
          }.bind(this)
        })

        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oBatchData1")
        this.getView().getModel("oBatchData1").setProperty("/aData1", [])
        var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZMASTER_CARD_SERVICE_BIN");
        oModel.read("/Mat_Des_PD", {
          urlParameters: { "$top": "500000000" },
          success: function (oresponse) {
            this.getView().getModel("oBatchData1").setProperty("/aData1", oresponse.results)
          }.bind(this)
        })
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oBatchData2")
        this.getView().getModel("oBatchData2").setProperty("/aData2", [])
        var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZMASTER_CARD_SERVICE_BIN");
        oModel.read("/Mat_Des_FG", {
          urlParameters: { "$top": "500000000" },
          success: function (oresponse) {
            this.getView().getModel("oBatchData2").setProperty("/aData2", oresponse.results)
          }.bind(this)
        })

        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oBatchData3")
        this.getView().getModel("oBatchData3").setProperty("/aData3", [])
        var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZMASTER_CARD_SERVICE_BIN");
        oModel.read("/MAT_DES", {
          urlParameters: { "$top": "50000000" },
          success: function (oresponse) {
            this.getView().getModel("oBatchData3").setProperty("/aData3", oresponse.results)
          }.bind(this)
        })
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oBatchData4")
        this.getView().getModel("oBatchData4").setProperty("/aData4", [])
        var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZMASTER_CARD_SERVICE_BIN");
        oModel.read("/ChangeQualityF4", {
          urlParameters: { "$top": "5000" },
          success: function (oresponse) {
            this.getView().getModel("oBatchData4").setProperty("/aData4", oresponse.results)
          }.bind(this)
        })
      },
      _onRouteMatch: function (oEvent) {
        var oCommonModel = this.getOwnerComponent().getModel('oCommonModel');
        var Action = oCommonModel.getProperty('/displayObject').Action;
        var cardno = oCommonModel.getProperty('/displayObject').cardno;
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "selvedge");
        this.getView().getModel("selvedge").setProperty("/totends", false);

        if (Action === "Change") {

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel1");
          this.getView().getModel("oTableDataModel1").setProperty("/aTableData1", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel2");
          this.getView().getModel("oTableDataModel2").setProperty("/aTableData2", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel3");
          this.getView().getModel("oTableDataModel3").setProperty("/aTableData3", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel4");
          this.getView().getModel("oTableDataModel4").setProperty("/aTableData4", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel5");
          this.getView().getModel("oTableDataModel5").setProperty("/aTableData5", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oGenericModel");
          this.getView().getModel("oGenericModel").setProperty("/setEditable", true);
          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oGenericModel");
          this.getView().getModel("oGenericModel").setProperty("/setchangeditable", true);


          this.readmasterData();

          // to fetch record automatically from the quality code

          // var valueset = this.getView().byId("QUAco").getValue();
          // this.departmentDataFetch_automatically(valueset);
        }
        if (Action === "Create") {
          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel1");
          this.getView().getModel("oTableDataModel1").setProperty("/aTableData1", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel2");
          this.getView().getModel("oTableDataModel2").setProperty("/aTableData2", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel3");
          this.getView().getModel("oTableDataModel3").setProperty("/aTableData3", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel4");
          this.getView().getModel("oTableDataModel4").setProperty("/aTableData4", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel5");
          this.getView().getModel("oTableDataModel5").setProperty("/aTableData5", []);


          var oDate = new Date();
          var oModel = {
            dDefaultDate: oDate.getFullYear() + '-' + Number(oDate.getMonth() + 1) + '-' + oDate.getDate()
          };
          this.getView().setModel(new JSONModel(oModel), "oDateModel")
          this.getView().setModel(oModel, "view");
          var date = this.getView().byId("date").getValue();
          var oDate = new Date(date);
          var oDate1 = new Date(oDate.getTime() - oDate.getTimezoneOffset() * 60000);
          var oDate2 = oDate1.toISOString().slice(0, 16);
          var getuserid = sap.ushell.Container.getService("UserInfo").getId();

          // var SELVEDGEWPMTR = this.getView().byId("idswpm").getValue();
          var Stends = String(this.getView().byId("selend").getValue());
          var zpreed = this.getView().byId("reeds").getValue();
          var Bodyends = String(this.getView().byId("bodend").getValue());
          var zpepi = this.getView().byId("EPI").getValue();
          var Zptotends = this.getView().byId("Idtotend").getValue();
          // var zepd = this.getView().byId("idepd").getValue();
          // var zsoer = this.getView().byId("sofpr").getValue();
          // var zsopr = this.getView().byId("sopr").getValue();
          // var zsotepr = this.getView().byId("sotepr").getValue();
          // var zsopmw = this.getView().byId("idwarpsopmw").getValue();
          // var zspmtrw = this.getView().byId("idweftsopmw").getValue();
          var zcrimp = this.getView().byId("crimp").getValue();
          var zdent = this.getView().byId("dent").getValue();
          var zwawtpermtr = this.getView().byId("IDwarp").getValue();
          var zwewtpermtr = this.getView().byId("IDweftwtmtr").getValue();
          var selend = this.getView().byId("selend").getValue();
          var ztowtpermtr = this.getView().byId("IDTOtwtmtr").getValue();
          var PayloadObject = {
            "Zpno": "",
            "Zpdate": oDate2,
            "Zpdevno": "",
            "Zpunit": "1200",
            "Ploom": "",
            "Zpqlycode": "",
            "Zpreed1": "",
            "Zppicks": "1",
            "Zpreedspace": zpreed === "" ? "0.00" : parseFloat(zpreed).toFixed(2),
            "Zpbrand": "",
            "remark": "",
            "Zpbeamlgh1": "",
            "Zpbeamlgh2": "",
            "Zpepi": zpepi === "" ? "0.00" : parseFloat(zpepi).toFixed(2),
            "Zpdytype": "",
            "Zpweavetype": "",
            "Zppriority": "",
            "Zpptyname": "",
            "Zpshldbewt": "0",
            "Zpstatus": "",
            "Zpremarks": "",
            "Zpusername": getuserid,
            // "Dpr": "",
            // "Epr": "",
            // "Epd": zepd === "" ? "0" : zepd,
            "Ppr": "",
            "Stends": Stends,
            // "Stdents": "",
            "pdnumber": "",
            "Bodyends": Bodyends,
            "Zptotends": Zptotends === "" ? "0" : Zptotends,
            "selvedgeends": selend === "" ? "0" : String(selend),
            // "Warptends": zsoer === "" ? "0" : zsoer,
            // "Wefttends": zsopr === "" ? "0" : zsopr,
            // "Stepr": zsotepr === "" ? "0" : zsotepr,
            // "Swpmtr": zsopmw === "" ? "0" : zsopmw,
            "Wstepr": "0",
            // "Wswpmtr": zspmtrw === "" ? "0" : zspmtrw,
            "zwawtpermtr": zwawtpermtr === "" ? "0.000" : parseFloat(zwawtpermtr).toFixed(3),
            "zwewtpermtr": zwewtpermtr === "" ? "0.000" : parseFloat(zwewtpermtr).toFixed(3),
            "ztowtpermtr": ztowtpermtr === "" ? "0.000" : parseFloat(ztowtpermtr).toFixed(3),
            // "Selvedgewpmtr": SELVEDGEWPMTR === "" ? "0" : SELVEDGEWPMTR,
            // "Stends1": STENDS1 === "" ? "0" : STENDS1,
            "Crimp": zcrimp === "" ? "0" : zcrimp,
            "Zunit": "",
            "extraends": "0",
            // "Zselvtyp": "",
            "Pdvlp": "",
            "Psnm": "",
            "Propac": "",
            "Plength": "",
            "Siqlty": "",
            // "ZVbeln": "",
            "ZPosnr": "",
            "Zdent": zdent === "" ? "0.00" : parseFloat(zdent).toFixed(2),
            "supplier": "",
            "ReleaseMcard": "",
            "fabricends": "",
            "pvends": "",
            "weavingreamrk": "",
            // "OldQlty": ""
          }
          this.getView().setModel(new JSONModel(PayloadObject), "oHeaderPayload")
          this.addwarpweftfix();

        }
        if (Action === "Display") {


          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel1");
          this.getView().getModel("oTableDataModel1").setProperty("/aTableData1", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel2");
          this.getView().getModel("oTableDataModel2").setProperty("/aTableData2", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel3");
          this.getView().getModel("oTableDataModel3").setProperty("/aTableData3", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel4");
          this.getView().getModel("oTableDataModel4").setProperty("/aTableData4", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel5");
          this.getView().getModel("oTableDataModel5").setProperty("/aTableData5", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oGenericModel");
          this.getView().getModel("oGenericModel").setProperty("/setEditable", false);
          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oGeneric");
          this.getView().getModel("oGeneric").setProperty("/setEditable", false);

          this.readmasterData();

        }
        if (Action === "Copy Program Code") {
          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel1");
          this.getView().getModel("oTableDataModel1").setProperty("/aTableData1", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel2");
          this.getView().getModel("oTableDataModel2").setProperty("/aTableData2", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel3");
          this.getView().getModel("oTableDataModel3").setProperty("/aTableData3", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel4");
          this.getView().getModel("oTableDataModel4").setProperty("/aTableData4", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel5");
          this.getView().getModel("oTableDataModel5").setProperty("/aTableData5", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oGenericModel");
          this.getView().getModel("oGenericModel").setProperty("/setEditable", true);
          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oGenericModel");
          this.getView().getModel("oGenericModel").setProperty("/setchangeditable", true);
          this.readmasterData();



        }
        if (Action === "Copy Warp/weft Patern") {
          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel1");
          this.getView().getModel("oTableDataModel1").setProperty("/aTableData1", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel2");
          this.getView().getModel("oTableDataModel2").setProperty("/aTableData2", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel3");
          this.getView().getModel("oTableDataModel3").setProperty("/aTableData3", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel4");
          this.getView().getModel("oTableDataModel4").setProperty("/aTableData4", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel5");
          this.getView().getModel("oTableDataModel5").setProperty("/aTableData5", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oGenericModel");
          this.getView().getModel("oGenericModel").setProperty("/setEditable", true);
          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oGenericModel");
          this.getView().getModel("oGenericModel").setProperty("/setchangeditable", true);
          this.readwarp();



        }
        if (Action === "Copy Draft/Peg Pattern") {
          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel1");
          this.getView().getModel("oTableDataModel1").setProperty("/aTableData1", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel2");
          this.getView().getModel("oTableDataModel2").setProperty("/aTableData2", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel3");
          this.getView().getModel("oTableDataModel3").setProperty("/aTableData3", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel4");
          this.getView().getModel("oTableDataModel4").setProperty("/aTableData4", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel5");
          this.getView().getModel("oTableDataModel5").setProperty("/aTableData5", []);

          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oGenericModel");
          this.getView().getModel("oGenericModel").setProperty("/setEditable", true);
          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oGenericModel");
          this.getView().getModel("oGenericModel").setProperty("/setchangeditable", true);
          this.readdraftpeg();



        }



      },

      CallQualitycodeData: function () {
        var oInput = this.getView().byId("QUAco");
        var oInput1 = this.getView().byId("QUAdesc");
        var plant = this.getView().byId("plant").getValue();
        var dept = this.getView().byId("dept").getValue();
        if (plant === "") {
          MessageBox.error("Please Fill Plant");
          oInput.setValue("");
          oInput1.setValue("");
        }
        else if (dept === "") {
          MessageBox.error("Please Fill Department");
          oInput.setValue("");
          oInput1.setValue("");
        }
        else {

          if (plant === "1200" && dept === "PPC") {
            var oBusyDialog = new sap.m.BusyDialog({
              text: "Please wait"
            });
            oBusyDialog.open();
            var oModel = this.getView().getModel();
            var qualitycode = this.getView().byId("QUAco").getValue();
            var oInput = this.getView().byId("QUAco");
            var oInput1 = this.getView().byId("QUAdesc");
            var data = this.getView().getModel("oBatchData3").getProperty("/aData3");
            var oFilter = new sap.ui.model.Filter("Zpqlycode", "EQ", qualitycode);
            oModel.read("/ZPC_HEADERMASTER", {
              filters: [oFilter],
              success: function (oresponse) {
                if (oresponse.results.length === 0) {
                  var qualitydec = "";
                  data.map(function (items) {
                    if (qualitycode === items.Product)
                      qualitydec = items.ProductDescription
                  })
                  oInput1.setValue(qualitydec);
                  oBusyDialog.close();

                }
                else {
                  var zpno = oresponse.results[0].Zpno;
                  var Qualtycode = oresponse.results[0].Zpqlycode;
                  oInput.setValue("");
                  oBusyDialog.close();
                  MessageBox.error("Master Card is Already Exist For this Quality Code:-  " + Qualtycode + "   Master Card No.:  " + zpno);
                }
              }
            });
          }

          // automatically data for both wrap and weft

          // if (plant === "1200" && dept === "PPC") {
          //   var oBusyDialog = new sap.m.BusyDialog({
          //     text: "Please wait"
          //   });
          //   oBusyDialog.open();

          //   var oModel = this.getView().getModel();
          //   var qualitycode = this.getView().byId("QUAco").getValue();
          //   var oInput = this.getView().byId("QUAco");
          //   var oInput1 = this.getView().byId("QUAdesc");
          //   var data = this.getView().getModel("oBatchData3").getProperty("/aData3");

          //   // Filter for the first entity ZPC_HEADERMASTER
          //   var oFilter = new sap.ui.model.Filter("Zpqlycode", "EQ", qualitycode);
          //   var anotherEntityFilter = new sap.ui.model.Filter("Material", "EQ", qualitycode); // Adjust filter as needed

          //   oModel.read("/ZPC_HEADERMASTER", {
          //     filters: [oFilter],
          //     success: function (oresponse) {
          //       if (oresponse.results.length === 0) {
          //         var qualitydec = "";
          //         data.map(function (items) {
          //           if (qualitycode === items.Product)
          //             qualitydec = items.ProductDescription;
          //         });
          //         oInput1.setValue(qualitydec);

          //         // Request additional fields from ZPP_SORTMASTER_CDS
          //         oModel.read("/ZPP_SORTMASTER_CDS", {
          //           filters: [anotherEntityFilter],
          //           success: function (anotherResponse) {
          //             if (anotherResponse.results.length > 0) {
          //               // Check if table model 'oTableDataModel1' exists
          //               var oTableModel1 = this.getView().getModel("oTableDataModel1");
          //               if (oTableModel1) {
          //                 var aTableData1 = oTableModel1.getProperty("/aTableData1") || [];

          //                 anotherResponse.results.forEach(function (item) {
          //                   var obj = {
          //                     YarnQuality: item.Warptype1,
          //                     YarnDescrption: item.warptypedesc1
          //                   };
          //                   aTableData1.push(obj);
          //                 });

          //                 // Update the model with new data
          //                 oTableModel1.setProperty("/aTableData1", aTableData1);
          //               } else {
          //                 console.error("Table model 'oTableDataModel1' is not defined.");
          //               }

          //               // Check if table model 'oTableDataModel2' exists
          //               var oTableModel2 = this.getView().getModel("oTableDataModel2");
          //               if (oTableModel2) {
          //                 var aTableData2 = oTableModel2.getProperty("/aTableData2") || [];

          //                 anotherResponse.results.forEach(function (item) {
          //                   var obj = {
          //                     YarnQuality: item.Wefttype1,
          //                     YarnDescrption: item.wefttypedesc1
          //                   };
          //                   aTableData2.push(obj);
          //                 });

          //                 // Update the model with new data
          //                 oTableModel2.setProperty("/aTableData2", aTableData2);
          //               } else {
          //                 console.error("Table model 'oTableDataModel2' is not defined.");
          //               }

          //               oBusyDialog.close(); // Close after updating both table models
          //             } else {
          //               // Handle case where no data is returned
          //               console.warn("No data found for the specified Material.");
          //               oBusyDialog.close();
          //             }
          //           }.bind(this),
          //           error: function (err) {
          //             oBusyDialog.close();
          //             MessageBox.error("Error fetching additional data from ZPP_SORTMASTER_CDS");
          //           }
          //         });

          //       } else {
          //         var zpno = oresponse.results[0].Zpno;
          //         var Qualtycode = oresponse.results[0].Zpqlycode;
          //         oInput.setValue("");
          //         oBusyDialog.close();
          //         MessageBox.error("Master Card is Already Exist For this Quality Code: " + Qualtycode + "   Master Card No.: " + zpno);
          //       }
          //     }.bind(this),
          //     error: function (err) {
          //       oBusyDialog.close();
          //       MessageBox.error("Error fetching data from ZPC_HEADERMASTER");
          //     }
          //   });
          // }



          else if (plant === "1300" && dept === "PPC") {
            var oBusyDialog = new sap.m.BusyDialog({
              text: "Please wait"
            });
            oBusyDialog.open();
            var oModel = this.getView().getModel();
            var qualitycode = this.getView().byId("QUAco").getValue();
            var oInput = this.getView().byId("QUAco");
            var oInput1 = this.getView().byId("QUAdesc");
            var data = this.getView().getModel("oBatchData2").getProperty("/aData2");
            var oFilter = new sap.ui.model.Filter("Zpqlycode", "EQ", qualitycode);
            oModel.read("/ZPC_HEADERMASTER", {
              filters: [oFilter],
              success: function (oresponse) {
                if (oresponse.results.length === 0) {
                  var qualitydec = "";
                  data.map(function (items) {
                    if (qualitycode === items.Product)
                      qualitydec = items.ProductDescription
                  })
                  oInput1.setValue(qualitydec);
                  oBusyDialog.close();

                }
                else {
                  var zpno = oresponse.results[0].Zpno;
                  var Qualtycode = oresponse.results[0].Zpqlycode;
                  oInput.setValue("");
                  oBusyDialog.close();
                  MessageBox.error("Master Card is Already Exist For this Quality Code:-  " + Qualtycode + "   Master Card No.:  " + zpno);
                }
              }
            });
          }
          else if (dept === "PD") {
            var oBusyDialog = new sap.m.BusyDialog({
              text: "Please wait"
            });
            oBusyDialog.open();
            var oModel = this.getView().getModel();
            var qualitycode = this.getView().byId("QUAco").getValue();
            var oInput = this.getView().byId("QUAco");
            var oInput1 = this.getView().byId("QUAdesc");
            var data = this.getView().getModel("oBatchData1").getProperty("/aData1");
            var oFilter = new sap.ui.model.Filter("Zpqlycode", "EQ", qualitycode);
            oModel.read("/ZPC_HEADERMASTER", {
              filters: [oFilter],
              success: function (oresponse) {
                if (oresponse.results.length === 0) {
                  var qualitydec = "";
                  data.map(function (items) {
                    if (qualitycode === items.Product)
                      qualitydec = items.ProductDescription
                  })
                  oInput1.setValue(qualitydec);
                  oBusyDialog.close();

                }
                else {
                  var zpno = oresponse.results[0].Zpno;
                  var Qualtycode = oresponse.results[0].Zpqlycode;
                  oInput.setValue("");
                  oBusyDialog.close();
                  MessageBox.error("Master Card is Already Exist For this Quality Code:-  " + Qualtycode + "   Master Card No.:  " + zpno);
                }
              }
            });
          }

        }



      },




      copymastercard: function () {
        var oInput = this.getView().byId("masc");
        oInput.setValue("");
        var oInput = this.getView().byId("QUAco");
        oInput.setValue("");
        var oInput = this.getView().byId("QUAdesc");
        oInput.setValue("");
      },
      livechange: function () {
        var reed = this.getView().byId("reed").getValue();
        var reed1 = this.getView().byId("reed");

        var dent = this.getView().byId("dent").getValue();
        var dent1 = this.getView().byId("dent");

        var Picks = this.getView().byId("Picks").getValue();
        var Picks1 = this.getView().byId("Picks");

        var reeds = this.getView().byId("reeds").getValue();
        var reeds1 = this.getView().byId("reeds");

        var pilth = this.getView().byId("pilth").getValue();
        var pilth1 = this.getView().byId("pilth");

        var crimp = this.getView().byId("crimp").getValue();
        var crimp1 = this.getView().byId("crimp");

        if (reed.length >= 4) {
          reed1.setValue("0");
          MessageBox.error("Wrong input please input less than 4");

        }
        if (dent.length >= 5) {
          dent1.setValue("0.00");
          MessageBox.error("Wrong input please input less than 5 with decimal");

        }
        if (Picks.length >= 4) {
          Picks1.setValue("1");
          MessageBox.error("Wrong input please input less than 4");

        }
        if (reeds.length >= 5) {
          reeds1.setValue("0.00");
          MessageBox.error("Wrong input please input less than 5 with decimal");

        }
        if (pilth.length >= 4) {
          pilth1.setValue("0");
          MessageBox.error("Wrong input please input less than 4");

        }
        if (crimp.length >= 3) {
          crimp1.setValue("1");
          MessageBox.error("Wrong input please input less than 3");

        }
      },
      livechange1: function () {
        var pvends = this.getView().byId("pvends").getValue();
        var pvends1 = this.getView().byId("pvends");

        var fabricends = this.getView().byId("fabricends");
        var totalends = this.getView().byId("Idtotend").getValue();

        if (pvends.length >= 5) {
          pvends1.setValue("");
          MessageBox.error("Wrong input please input less than 4");

        }
        else {
          var a = Number(pvends) - Number(totalends);
          if (a > 0) {
            a = parseFloat(a).toFixed(0)
            fabricends.setValue(a);
          }
          else {
            a = 0;
            fabricends.setValue(a);
          }


        }
      },
      addwarpweftfix: function () {
        var TableModel = this.getView().getModel("oTableDataModel1");
        var aTableArr1 = TableModel.getProperty("/aTableData1")
        var aTablearr1 = [];

        for (var i = 0; i <= 3; i++) {
          if (i == 0) {
            var repeat = "R2";

          }
          else
            if (i == 1) {
              var repeat = "M2";
            }
            else
              if (i == 2) {
                var repeat = "R1";

              }
              else
                if (i == 3) {
                  var repeat = "M1";
                }
          var oTable = this.getView().byId("idwarppaterntable");
          oTable.setFixedColumnCount(6);
          var obj1 = {
            YarnQuality: "",
            YarnDescrption: "",
            ResultantCout: "",
            PicksPerRepeat: "",
            WtperMeter: "",
            RepeatMultiplier: repeat,
            p1: "",
            p2: "",
            p3: "",
            p4: "",
            p5: "",
            p6: "",
            p7: "",
            p8: "",
            p9: "",
            p10: "",
            p11: "",
            p12: "",
            p13: "",
            p14: "",
            p15: "",
            p16: "",
            p17: "",
            p18: "",
            p19: "",
            p20: "",
          }

          aTableArr1.push(obj1);
          TableModel.setProperty("/aTableData1", aTableArr1)
        }
        var TableModel = this.getView().getModel("oTableDataModel2");
        var aTableArr1 = TableModel.getProperty("/aTableData2")
        var aTablearr1 = [];
        for (var i = 0; i <= 3; i++) {
          if (i == 0) {
            var repeat = "R2";

          }
          else
            if (i == 1) {
              var repeat = "M2";
            }
            else
              if (i == 2) {
                var repeat = "R1";

              }
              else
                if (i == 3) {
                  var repeat = "M1";
                }

          var oTable = this.getView().byId("idwarppaterntable");
          oTable.setFixedColumnCount(6);
          var obj1 = {
            YarnQuality: "",
            YarnDescrption: "",
            ResultantCout: "",
            endsPerRepeat: "",
            WtperMeter: "",
            RepeatMultiplier: repeat,
            p1: "",
            p2: "",
            p3: "",
            p4: "",
            p5: "",
            p6: "",
            p7: "",
            p8: "",
            p9: "",
            p10: "",
            p11: "",
            p12: "",
            p13: "",
            p14: "",
            p15: "",
            p16: "",
            p17: "",
            p18: "",
            p19: "",
            p20: "",
          }

          aTableArr1.push(obj1);
          TableModel.setProperty("/aTableData2", aTableArr1)
        }
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oGeneric");
        this.getView().getModel("oGeneric").setProperty("/setEditable", false);
      },
      addwarppatern: function () {
        var selend = Number(this.getView().byId("selend").getValue());
        if (selend === 0) {
          MessageBox.error("Please Fill Header Slevedge Ends ");
        }
        else {
          var oBusyDialog = new sap.m.BusyDialog({
            title: "Fetching Data",
            text: "Please wait ..."
          });
          oBusyDialog.open();

          var oModel = this.getView().getModel();
          var qualitycode = this.getView().byId("idDel1").getValue();
          var TableModel = this.getView().getModel("oTableDataModel1");
          var aTableArr1 = TableModel.getProperty("/aTableData1")
          var aTablearr1 = [];
          var oInput = this.getView().byId("idDel1");
          var oTable = this.getView().byId("idwarppaterntable");

          var oFilter = new sap.ui.model.Filter("Product", "EQ", qualitycode);
          oModel.read("/YARN_DES", {
            filters: [oFilter],
            success: function (oresponse) {
              if (oresponse.results.length === 0) {
                oBusyDialog.close();
                MessageBox.error("Wrong Yarn Quality Input");
                oInput.setValue("");

              }
              else {

                oTable.setFixedColumnCount(6);
                var Yarndesc = oresponse.results[0].ProductDescription;
                var ProductOldID = oresponse.results[0].ProductOldID;
                var obj1 = {
                  YarnQuality: qualitycode,
                  YarnDescrption: Yarndesc,
                  ResultantCout: ProductOldID,
                  endsPerRepeat: "",
                  WtperMeter: "",
                  RepeatMultiplier: "",
                  p1: "",
                  p2: "",
                  p3: "",
                  p4: "",
                  p5: "",
                  p6: "",
                  p7: "",
                  p8: "",
                  p9: "",
                  p10: "",
                  p11: "",
                  p12: "",
                  p13: "",
                  p14: "",
                  p15: "",
                  p16: "",
                  p17: "",
                  p18: "",
                  p19: "",
                  p20: "",
                }

                aTableArr1.push(obj1);
                TableModel.setProperty("/aTableData1", aTableArr1)
                oInput.setValue("");
                oBusyDialog.close();
              }
            },
            error: function () {
              oBusyDialog.close();
              MessageBox.error("Wrong Yarn Quality Input");
              oInput.setValue("");
            }.bind(this)
          });
        }

      },
      addweftpatern: function () {
        var oBusyDialog = new sap.m.BusyDialog({
          title: "Fetching Data",
          text: "Please wait ..."
        });
        oBusyDialog.open();
        var oModel = this.getView().getModel();
        var qualitycode = this.getView().byId("idDel2").getValue();
        var TableModel = this.getView().getModel("oTableDataModel2");
        var aTableArr1 = TableModel.getProperty("/aTableData2")
        var aTablearr1 = [];
        var oTable = this.getView().byId("idweftpaterntable");
        var oInput = this.getView().byId("idDel2");
        var oTable = this.getView().byId("idwarppaterntable");
        var oFilter = new sap.ui.model.Filter("Product", "EQ", qualitycode);
        oModel.read("/Weft_DES", {
          filters: [oFilter],
          success: function (oresponse) {
            if (oresponse.results.length === 0) {
              oBusyDialog.close();
              MessageBox.error("Wrong Yarn Quality Input");
              oInput.setValue("");

            }
            else {


              oTable.setFixedColumnCount(6);
              var Yarndesc = oresponse.results[0].ProductDescription;
              var ProductOldID = oresponse.results[0].ProductOldID;
              var obj1 = {

                YarnQuality: qualitycode,
                YarnDescrption: Yarndesc,
                ResultantCout: ProductOldID,
                PicksPerRepeat: "",
                WtperMeter: "",
                RepeatMultiplier: "",
                p1: "",
                p2: "",
                p3: "",
                p4: "",
                p5: "",
                p6: "",
                p7: "",
                p8: "",
                p9: "",
                p10: "",
                p11: "",
                p12: "",
                p13: "",
                p14: "",
                p15: "",
                p16: "",
                p17: "",
                p18: "",
                p19: "",
                p20: "",
              }
              aTableArr1.push(obj1);
              TableModel.setProperty("/aTableData2", aTableArr1)

              oInput.setValue("");
              oBusyDialog.close();
            }
          },
          error: function () {
            oBusyDialog.close();
            MessageBox.error("Wrong Yarn Quality Input");
            oInput.setValue("");

          }.bind(this)
        });

      },
      addselevData: function () {
        var oBusyDialog = new sap.m.BusyDialog({
          title: "Fetching Data",
          text: "Please wait ..."
        });
        oBusyDialog.open();
        var oModel = this.getView().getModel();
        var qualitycode = this.getView().byId("idDel3").getValue();

        var TableModel = this.getView().getModel("oTableDataModel5");
        var aTableArr = TableModel.getProperty("/aTableData5")
        var aTablearr = [];
        var oTable = this.getView().byId("idweftpaterntable");
        var oInput = this.getView().byId("idDel3");
        var oTable = this.getView().byId("idwarppaterntable");
        var oFilter = new sap.ui.model.Filter("Product", "EQ", qualitycode);
        oModel.read("/YARN_DES", {
          filters: [oFilter],
          success: function (oresponse) {
            if (oresponse.results.length === 0) {
              oBusyDialog.close();
              MessageBox.error("Wrong Yarn Quality Input");
              oInput.setValue("");

            }
            else {
              var Yarndesc = oresponse.results[0].ProductDescription;
              var ProductOldID = oresponse.results[0].ProductOldID;
              var obj = {

                Align: "",
                Type: "",
                YarnQuality: qualitycode,
                YarnDesc: Yarndesc,
                ResultantCount: ProductOldID,
                SelvedgeWeave: "",

                Dent: "",
                Ends: "",
                Repeats: "",
                Multiplier: "",
                TotalEnds: "",
                WtPerMeter: "",
                Description: "",
                Shades: ""
              }

              aTableArr.push(obj);
              TableModel.setProperty("/aTableData5", aTableArr)
              oInput.setValue("");
              oBusyDialog.close();
            }
          },
          error: function () {
            oBusyDialog.close();
            MessageBox.error("Wrong Yarn Quality Input");
            oInput.setValue("");

          }.bind(this)
        });

      },
      addTselvedgeableData: function () {
        var table = this.getView().getModel("oTableDataModel5").getProperty("/aTableData5");
        var table1 = this.getView().getModel("oTableDataModel7").getProperty("/aTableData7");
        var selv = table1.length - 1;
        if (table.length == selv) {

        }
        else {
          for (var i = 0; i < table.length; i++) {
            var TableModel = this.getView().getModel("oTableDataModel7");
            var aTableArr = TableModel.getProperty("/aTableData7")
            var aTablearr = [];

            var obj = {

              Quality: table[i].YarnQuality,
              Descrption: table[i].YarnDesc,
              mat1: "",
              Length1: "",
              Desc1: "",
              mat2: "",
              Length2: "",
              Desc2: "",
              mat3: "",
              Length3: "",
              Desc3: "",
              mat4: "",
              Length4: "",
              Desc4: "",
              mat5: "",
              Length5: "",
              Desc5: "",
              mat6: "",
              Length6: "",
              Desc6: "",
              mat7: "",
              Length7: "",
              Desc7: "",
              mat8: "",
              Length8: "",
              Desc8: "",
              mat9: "",
              Length9: "",
              Desc9: "",
              mat10: "",
              Length10: "",
              Desc10: "",
            }

            aTableArr.push(obj);
            TableModel.setProperty("/aTableData7", aTableArr)
          }
        }
      },
      adddragData: function () {

        var TableModel = this.getView().getModel("oTableDataModel3");
        var aTableArr = TableModel.getProperty("/aTableData3")
        var aTablearr = [];

        var obj = {

          Description: "",
          Repeats: "",
          Multiplier: "",
          Repeats1: "",
          Multiplier1: "",
        }

        aTableArr.push(obj);
        TableModel.setProperty("/aTableData3", aTableArr)

      },
      addpegTableData: function () {

        var TableModel = this.getView().getModel("oTableDataModel4");
        var aTableArr = TableModel.getProperty("/aTableData4")
        var aTablearr = [];

        var obj = {

          Description: "",
          Repeats: "",
          Multiplier: "",
          Repeats1: "",
          Multiplier1: "",
          Remarks: "",
        }

        aTableArr.push(obj);
        TableModel.setProperty("/aTableData4", aTableArr)

      },
      onsave: function () {
        var oCommonModel = this.getOwnerComponent().getModel('oCommonModel');
        var Action = oCommonModel.getProperty('/displayObject').Action;


        var plant = this.getView().byId("plant").getValue();
        var reed = this.getView().byId("reed").getValue();
        var Dent = this.getView().byId("dent").getValue();
        var Epi = this.getView().byId("EPI").getValue();
        var Pick = this.getView().byId("Picks").getValue();
        var reedspace = this.getView().byId("reeds").getValue();
        var Dept = this.getView().byId("dept").getValue();
        var mastercardno = this.getView().byId("masc").getValue();
        var Dyeingsort = this.getView().byId("iddyeingsort").getValue();
        var pvends = this.getView().byId("pvends").getValue();
        var Qualitycode = this.getView().byId("QUAco").getValue();
        if (plant === "") {
          MessageBox.error("Please fill Plant");
        }
        else
          if (reed === "") {
            MessageBox.error("Please fill Reed");
          }
          else
            if (Dent === "") {
              MessageBox.error("Please fill Dent");
            }
            else
              if (Epi === "") {
                MessageBox.error("Please fill EPI");
              }
              else
                if (Pick === "") {
                  MessageBox.error("Please fill Pick");
                }
                else
                  if (reedspace === "") {
                    MessageBox.error("Please fill Reedspace");
                  }
                  else
                    if (Dept === "") {
                      MessageBox.error("Please fill Department");
                    }
                    else
                      if (pvends === "") {
                        MessageBox.error("Please fill PV Ends");
                      }
                      else if (Qualitycode === "") {
                        MessageBox.error("Please fill Quality Code");
                      }
                      else
                        if (Dyeingsort === "" && plant === "1200") {
                          MessageBox.error("Please fill Dyeing sort");
                        }
                        else {
                          if (Action === "Create" && mastercardno === "") {
                            this.onReadNumberRange();

                          }
                          else
                            if (Action === "Copy Program Code" && mastercardno === "") {
                              this.onReadNumberRange();

                            }
                            else {
                              this.SAVEMASTERCARD();
                            }
                        }


      },
      SAVEMASTERCARD: function () {

        var oBusyDialog = new sap.m.BusyDialog({
          title: "Saving data",
          text: "Please wait ..."
        });
        oBusyDialog.open();
        var oCommonModel = this.getOwnerComponent().getModel('oCommonModel');
        var Action = oCommonModel.getProperty('/displayObject').Action;
        var Zpno = this.getView().byId("masc").getValue();
        if (Action === "Copy Program Code") {
          Action = "Create";
        }
        if (Action === "Create") {
          var oModel1 = this.getView().getModel();
          var oHeaderPayload = this.getView().getModel("oHeaderPayload");
          var date = this.getView().byId("date").getValue();
          var oDate = new Date(date);
          var oDate1 = new Date(oDate.getTime() - oDate.getTimezoneOffset() * 60000);

          oModel1.create("/ZPC_HEADERMASTER", oHeaderPayload.getData(), {
            // filters: [],
            method: "POST",
            success: function (ores) {
              this.warpweftpatternsave();
              this.savedraftpeg();
              this.saveselvedge();
              oBusyDialog.close();
              MessageBox.show("Master Card No." + Zpno + " generated successfully!"
                , {
                  title: "information",
                  icon: MessageBox.Icon.SUCCESS,
                  // onClose: function (oAction) {
                  //   if (oAction === MessageBox.Action.OK) {
                  //     window.location.reload();
                  //   }
                  // }
                  onClose: function (oAction) {
                    if (oAction === MessageBox.Action.OK) {
                      var oHistory = sap.ui.core.routing.History.getInstance();
                      var sPreviousHash = oHistory.getPreviousHash();

                      if (sPreviousHash !== undefined) {
                        window.history.go(-1);
                      } else {
                        var oRouter = this.getOwnerComponent().getRouter();
                        oRouter.navTo("Gate", {}, true);
                      }
                    }
                  }.bind(this)

                }
              );
            }.bind(this),
            error: function (ores) {
              oBusyDialog.close();
              MessageBox.error("Please Check Data Is nOt Upload");
            }.bind(this)
          })

        }
        else if (Action === "Change") {
          var oModel1 = this.getView().getModel();
          var oHeaderPayload = this.getView().getModel("oHeaderPayload");
          var zpno = this.getView().byId("masc").getValue();
          var date = this.getView().byId("date").getValue();
          var oDate = new Date(date);
          var oDate1 = new Date(oDate.getTime() - oDate.getTimezoneOffset() * 60000);
          var table = this.getView().getModel("oTableDataModel").getProperty("/aTableData");
          var oFilter = new sap.ui.model.Filter("Zpno", "EQ", zpno);
          oModel1.update("/ZPC_HEADERMASTER(Zpno='" + zpno + "')", oHeaderPayload.getData(), {
            success: function (ores) {

              this.warpweftpatternsave();
              this.savedraftpeg();
              this.saveselvedge();
              oBusyDialog.close();
              MessageBox.show("Data Saved Succesfully"
                , {
                  title: "information",
                  icon: MessageBox.Icon.SUCCESS,
                  // onClose: function (oAction) {
                  //   if (oAction === MessageBox.Action.OK) {
                  //     window.location.reload();
                  //   }
                  // }
                  onClose: function (oAction) {
                    if (oAction === MessageBox.Action.OK) {
                      var oHistory = sap.ui.core.routing.History.getInstance();
                      var sPreviousHash = oHistory.getPreviousHash();

                      if (sPreviousHash !== undefined) {
                        window.history.go(-1);
                      } else {
                        var oRouter = this.getOwnerComponent().getRouter();
                        oRouter.navTo("Gate", {}, true);
                      }
                    }
                  }
                }
              );
            }.bind(this),
            error: function (ores) {
              oBusyDialog.close();
              MessageBox.error("Please Check Data Is nOt Upload Header");
            }.bind(this)
          })

        }
      },
      warpweftpatternsave: function (oEvent) {
        var oModel = this.getView().getModel();
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel");
        this.getView().getModel("oTableDataModel").setProperty("/aTableData", []);
        var tabl1 = this.getView().getModel("oTableDataModel1").getProperty("/aTableData1");
        var tabl2 = this.getView().getModel("oTableDataModel2").getProperty("/aTableData2");
        var ZPNO = this.getView().byId("masc").getValue();
        var TableModel = this.getView().getModel("oTableDataModel");
        var aTableArr = TableModel.getProperty("/aTableData")
        var aTablearr = [];

        for (var i = 0; i < tabl1.length; i++) {
          var items1 =
          {
            Zpno: ZPNO,
            Zpmsno: i + 1,
            Pattern: "1",
            Zpmtype: "",
            Rescnt: tabl1[i].ResultantCout,
            Zpmyqlty: tabl1[i].YarnQuality,
            Maktx: tabl1[i].YarnDescrption,
            Rep: tabl1[i].RepeatMultiplier,
            Ends: tabl1[i].endsPerRepeat,
            Wpmtr: tabl1[i].WtperMeter,
            P1: tabl1[i].p1,
            P2: tabl1[i].p2,
            P3: tabl1[i].p3,
            P4: tabl1[i].p4,
            P5: tabl1[i].p5,
            P6: tabl1[i].p6,
            P7: tabl1[i].p7,
            P8: tabl1[i].p8,
            P9: tabl1[i].p9,
            P10: tabl1[i].p10,
            P11: tabl1[i].p11,
            P12: tabl1[i].p12,
            P13: tabl1[i].p13,
            P14: tabl1[i].p14,
            P15: tabl1[i].p15,
            P16: tabl1[i].p16,
            P17: tabl1[i].p17,
            P18: tabl1[i].p18,
            P19: tabl1[i].p19,
            P20: tabl1[i].p20
          }
          aTableArr.push(items1);
          TableModel.setProperty("/aTableData", aTableArr)
        }
        for (var i = 0; i < tabl2.length; i++) {
          var items1 =
          {
            Zpno: ZPNO,
            Zpmsno: i + 1,
            Pattern: "2",
            Zpmtype: "",
            Rescnt: tabl2[i].ResultantCout,
            Zpmyqlty: tabl2[i].YarnQuality,
            Maktx: tabl2[i].YarnDescrption,
            Rep: tabl2[i].RepeatMultiplier,
            Ends: tabl2[i].PicksPerRepeat,
            Wpmtr: tabl2[i].WtperMeter,
            P1: tabl2[i].p1,
            P2: tabl2[i].p2,
            P3: tabl2[i].p3,
            P4: tabl2[i].p4,
            P5: tabl2[i].p5,
            P6: tabl2[i].p6,
            P7: tabl2[i].p7,
            P8: tabl2[i].p8,
            P9: tabl2[i].p9,
            P10: tabl2[i].p10,
            P11: tabl2[i].p11,
            P12: tabl2[i].p12,
            P13: tabl2[i].p13,
            P14: tabl2[i].p14,
            P15: tabl2[i].p15,
            P16: tabl2[i].p16,
            P17: tabl2[i].p17,
            P18: tabl2[i].p18,
            P19: tabl2[i].p19,
            P20: tabl2[i].p20
          }
          aTableArr.push(items1);
          TableModel.setProperty("/aTableData", aTableArr)
        }
        var finaldata = this.getView().getModel("oTableDataModel").getProperty("/aTableData");
        var myArr = finaldata.map((res) => { return { ...res, Zpmsno: Number(res.Zpmsno) } }).sort((a, b) => a.Zpmsno - b.Zpmsno);
        // var myArr = []
        // var arr = []
        // var len = finaldata.length;
        // var length = len / 2;
        // for (var i = 0; i < length; i++) {
        //   for (var j = 0; j < finaldata.length; j++) {
        //     if (finaldata[i].Zpmsno === finaldata[j].Zpmsno) {
        //       myArr.push(finaldata[j])
        //     }
        //   }
        // }
        var oCommonModel = this.getOwnerComponent().getModel('oCommonModel');
        var Action = oCommonModel.getProperty('/displayObject').Action;
        if (Action === "Copy Program Code") {
          Action = "Create";
        }
        if (Action === "Create") {
          myArr.map(function (items) {
            var pmsno = String(items.Zpmsno);
            var data = {
              Zpno: items.Zpno,
              Zpmsno: pmsno,
              Pattern: items.Pattern,
              Grp: items.Pattern,
              Zpmtype: items.Zpmtype,
              Rescnt: items.Rescnt === "" || items.Rescnt === NaN ? "0.000" : parseFloat(items.Rescnt).toFixed(3),
              Zpmyqlty: items.Zpmyqlty,
              Maktx: items.Maktx,
              Rep: items.Rep,
              Ends: items.Ends === "" || items.Ends === undefined ? "0" : String(items.Ends),
              Wpmtr: items.Wpmtr === "" ? "0.000" : parseFloat(items.Wpmtr).toFixed(3),
              P1: items.P1,
              P2: items.P2,
              P3: items.P3,
              P4: items.P4,
              P5: items.P5,
              P6: items.P6,
              P7: items.P7,
              P8: items.P8,
              P9: items.P9,
              P10: items.P10,
              P11: items.P11,
              P12: items.P12,
              P13: items.P13,
              P14: items.P14,
              P15: items.P15,
              P16: items.P16,
              P17: items.P17,
              P18: items.P18,
              P19: items.P19,
              P20: items.P20
            }
            oModel.create("/zpc_warppattern", data, {
              success: function (oresponse) {

              },
              error: function (ores) {
                MessageBox.error("Please Check Data is not Upload in Warp and Weft Table");
              }
            })
          })
        }
        else if (Action === "Change") {
          myArr.map(function (items) {

            var pmsno = String(items.Zpmsno)

            if (pmsno.length === 1) {
              var zpmsno = "00000" + items.Zpmsno
            } else if (pmsno.length === 2) {
              zpmsno = "0000" + items.Zpmsno
            }

            var zpno = String(items.Zpno);

            var oFilter = new sap.ui.model.Filter("Zpno", "EQ", zpno)
            var oFilter1 = new sap.ui.model.Filter("Zpmsno", "EQ", zpmsno.toString())
            var oFilter2 = new sap.ui.model.Filter("Pattern", "EQ", items.Pattern)
            var oFilter3 = new sap.ui.model.Filter("Grp", "EQ", items.Pattern)

            oModel.read("/zpc_warppattern", {
              filters: [oFilter, oFilter1, oFilter2, oFilter3],
              success: function (oresponse) {
                if (oresponse.results.length > 0) {

                  var data = {
                    Zpno: zpno,
                    Zpmsno: zpmsno,
                    Pattern: items.Pattern,
                    Grp: items.Pattern,
                    Zpmtype: items.Zpmtype,
                    Rescnt: items.Rescnt === "" || items.Rescnt === NaN ? "0.000" : parseFloat(items.Rescnt).toFixed(3),
                    Zpmyqlty: items.Zpmyqlty,
                    Maktx: items.Maktx,
                    Rep: items.Rep,
                    Ends: items.Ends === "" || items.Ends === undefined ? "0" : String(items.Ends),
                    Wpmtr: items.Wpmtr === "" ? "0.000" : parseFloat(items.Wpmtr).toFixed(3),
                    P1: items.P1,
                    P2: items.P2,
                    P3: items.P3,
                    P4: items.P4,
                    P5: items.P5,
                    P6: items.P6,
                    P7: items.P7,
                    P8: items.P8,
                    P9: items.P9,
                    P10: items.P10,
                    P11: items.P11,
                    P12: items.P12,
                    P13: items.P13,
                    P14: items.P14,
                    P15: items.P15,
                    P16: items.P16,
                    P17: items.P17,
                    P18: items.P18,
                    P19: items.P19,
                    P20: items.P20
                  }

                  oModel.update("/zpc_warppattern(Zpno='" + zpno + "',Zpmsno='" + zpmsno.toString() + "',Pattern='" + items.Pattern + "',Grp='" + items.Pattern + "')", data, {
                    success: function (oresponse) {

                    },
                    error: function (ores) {
                      MessageBox.error("Please Check Data is not Upload in Warp and Weft Table");
                    }
                  })
                } else {
                  var data = {
                    Zpno: zpno,
                    Zpmsno: zpmsno,
                    Pattern: items.Pattern,
                    Grp: items.Pattern,
                    Zpmtype: items.Zpmtype,
                    Rescnt: items.Rescnt === "" || items.Rescnt === NaN ? "0.000" : parseFloat(items.Rescnt).toFixed(3),
                    Zpmyqlty: items.Zpmyqlty,
                    Maktx: items.Maktx,
                    Rep: items.Rep,
                    Ends: items.Ends === "" || items.Ends === undefined ? "0" : String(items.Ends),
                    Wpmtr: items.Wpmtr === "" ? "0.000" : parseFloat(items.Wpmtr).toFixed(3),
                    P1: items.P1,
                    P2: items.P2,
                    P3: items.P3,
                    P4: items.P4,
                    P5: items.P5,
                    P6: items.P6,
                    P7: items.P7,
                    P8: items.P8,
                    P9: items.P9,
                    P10: items.P10,
                    P11: items.P11,
                    P12: items.P12,
                    P13: items.P13,
                    P14: items.P14,
                    P15: items.P15,
                    P16: items.P16,
                    P17: items.P17,
                    P18: items.P18,
                    P19: items.P19,
                    P10: items.P20
                  }
                  oModel.create("/zpc_warppattern", data, {
                    success: function (oresponse) {

                    },
                    error: function (ores) {
                      MessageBox.error("Please Check Data is not Upload in Warp and Weft Table");
                    }
                  })
                }
              }
            })
          })
        }
      },
      savedraftpeg: function () {
        var oModel = this.getView().getModel();
        var ZPNO = this.getView().byId("masc").getValue();
        var draft = this.getView().getModel("oTableDataModel3").getProperty("/aTableData3");
        var peg = this.getView().getModel("oTableDataModel4").getProperty("/aTableData4");
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel");
        this.getView().getModel("oTableDataModel").setProperty("/aTableData", []);
        var TableModel = this.getView().getModel("oTableDataModel");
        var aTableArr = TableModel.getProperty("/aTableData")
        var aTablearr = [];

        for (var i = 0; i < draft.length; i++) {
          var pmsno = String(i + 1);
          var pmgrp = String(1);
          var items1 = {
            Zpno: ZPNO,
            Pmgroup: pmgrp,
            Ptype: "1",
            Zpmsno: pmsno,
            Pmdesc: draft[i].Description,
            Mul: draft[i].Multiplier,
            Repeats: draft[i].Repeats,
            Remarks: "",
          }
          aTableArr.push(items1);
          TableModel.setProperty("/aTableData", aTableArr)
        }
        for (var i = 0; i < peg.length; i++) {
          var pmsno = String(i + 1);
          var pmgrp = String(2);
          var items2 = {
            Zpno: ZPNO,
            Pmgroup: pmgrp,
            Ptype: "2",
            Zpmsno: pmsno,
            Pmdesc: peg[i].Description,
            Mul: peg[i].Multiplier,
            Repeats: peg[i].Repeats,
            Remark: peg[i].Remarks
          }
          aTableArr.push(items2);
          TableModel.setProperty("/aTableData", aTableArr)
        }
        var myArr = this.getView().getModel("oTableDataModel").getProperty("/aTableData");
        var oCommonModel = this.getOwnerComponent().getModel('oCommonModel');
        var Action = oCommonModel.getProperty('/displayObject').Action;
        if (Action === "Copy Program Code") {
          Action = "Create";
        }
        if (Action === "Create") {
          myArr.map(function (items) {
            var data =
            {
              Zpno: items.Zpno,
              Pmgroup: items.Pmgroup,
              Ptype: items.Ptype,
              Zpmsno: items.Zpmsno,
              Pmdesc: items.Pmdesc,
              Mul: items.Mul,
              Repeats: items.Repeats,
              Remark: items.Remark === undefined ? "" : String(items.Remark)
            }
            oModel.create("/ZPC_DRAFTPEGPLAN", data, {
              success: function (oresponse) {

              },
              error: function (ores) {
                MessageBox.error("Please Check Data is not Upload in Draft and Peg Table");
              }
            })
          })
        }
        else if (Action === "Change") {

          myArr.map(function (items) {
            var oFilter = new sap.ui.model.Filter("Zpno", "EQ", items.Zpno)
            var oFilter1 = new sap.ui.model.Filter("Pmgroup", "EQ", items.Pmgroup)
            var oFilter2 = new sap.ui.model.Filter("Ptype", "EQ", items.Ptype)
            var oFilter3 = new sap.ui.model.Filter("Zpmsno", "EQ", items.Zpmsno)
            oModel.read("/ZPC_DRAFTPEGPLAN", {
              filters: [oFilter, oFilter1, oFilter2, oFilter3],
              success: function (oresponse) {
                if (oresponse.results.length > 0) {
                  var data =
                  {
                    Zpno: items.Zpno,
                    Pmgroup: items.Pmgroup,
                    Ptype: items.Ptype,
                    Zpmsno: items.Zpmsno,
                    Pmdesc: items.Pmdesc,
                    Mul: items.Mul,
                    Repeats: items.Repeats,
                    Remark: items.Remark === undefined ? "" : String(items.Remark)
                  }
                  oModel.update("/ZPC_DRAFTPEGPLAN(Zpno='" + items.Zpno + "',Pmgroup='" + items.Pmgroup + "',Ptype='" + items.Ptype + "',Zpmsno='" + items.Zpmsno + "')", data, {
                    success: function (oresponse) {

                    },
                    error: function (ores) {
                      MessageBox.error("Please Check Data is not Upload in Draft and Peg Table");
                    }
                  })
                }
                else {

                  var data =
                  {
                    Zpno: String(items.Zpno),
                    Pmgroup: items.Pmgroup,
                    Ptype: String(items.Ptype),
                    Zpmsno: items.Zpmsno,
                    Pmdesc: String(items.Pmdesc),
                    Mul: String(items.Mul),
                    Repeats: String(items.Repeats),
                    Remark: items.Remark === undefined ? "" : String(items.Remark)
                  }
                  oModel.create("/ZPC_DRAFTPEGPLAN", data, {
                    success: function (oresponse) {

                    },
                    error: function (ores) {
                      MessageBox.error("Please Check Data is not Upload in Draft and Peg Table");
                    }
                  })


                }
              }
            })
          })
        }
      },
      saveselvedge: function () {
        var oModel = this.getView().getModel();
        var ZPNO = this.getView().byId("masc").getValue();

        var oCommonModel = this.getOwnerComponent().getModel('oCommonModel');
        var Action = oCommonModel.getProperty('/displayObject').Action;
        if (Action === "Copy Program Code") {
          Action = "Create";
        }
        var ZPNO = this.getView().byId("masc").getValue();
        var selvedge = this.getView().getModel("oTableDataModel5").getProperty("/aTableData5");
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel");
        this.getView().getModel("oTableDataModel").setProperty("/aTableData", []);
        var TableModel = this.getView().getModel("oTableDataModel");
        var aTableArr = TableModel.getProperty("/aTableData")
        var aTablearr = [];

        for (var j = 0; j < selvedge.length; j++) {
          var pmsno = String(j + 1);
          var Rescnt = selvedge[j].ResultantCount;
          var ends = selvedge[j].WtPerMeter;
          if (Rescnt === "") {
            var rr = Rescnt;
            var endd = ends;
          }
          else {
            var rr = parseFloat(Rescnt).toFixed(3);
            var endd = parseFloat(ends).toFixed(3)
          }


          var data =
          {
            Zpno: ZPNO,
            Zpmsno: pmsno,
            Rescnt: selvedge[j].ResultantCount === "" ? "0.00" : parseFloat(selvedge[j].ResultantCount).toFixed(2),
            Zpmyqlty: selvedge[j].YarnQuality,
            Maktx: selvedge[j].YarnDesc,
            Shaft: selvedge[j].SelvedgeWeave,
            Dent: selvedge[j].Dent,
            Ends: selvedge[j].Ends,
            Repeats: selvedge[j].Repeats,
            Mul: selvedge[j].Multiplier,
            Totalends: selvedge[j].TotalEnds,
            Pmdesc: selvedge[j].Description,
            Shades: selvedge[j].Shades,
            Wpmtr: selvedge[j].WtPerMeter === "" ? "0.00" : parseFloat(selvedge[j].WtPerMeter).toFixed(2),
          }
          aTableArr.push(data);
          TableModel.setProperty("/aTableData", aTableArr)
        }

        if (Action === "Create") {
          var selvedge = this.getView().getModel("oTableDataModel5").getProperty("/aTableData5");
          for (var j = 0; j < selvedge.length; j++) {
            var pmsno = String(j + 1);
            var Rescnt = selvedge[j].ResultantCount;
            var ends = selvedge[j].WtPerMeter;
            if (Rescnt === "") {
              var rr = Rescnt;
              var endd = ends;
            }
            else {
              var rr = parseFloat(Rescnt).toFixed(3);
              var endd = parseFloat(ends).toFixed(3)
            }


            var data =
            {
              Zpno: ZPNO,
              Zpmsno: pmsno,
              Rescnt: selvedge[j].ResultantCount === "" ? "0.000" : parseFloat(selvedge[j].ResultantCount).toFixed(3),
              Zpmyqlty: selvedge[j].YarnQuality,
              Maktx: selvedge[j].YarnDesc,
              Shaft: selvedge[j].SelvedgeWeave,
              Dent: selvedge[j].Dent,
              // Dent1: selvedge[j].Dent1,
              Ends: selvedge[j].Ends,
              Repeats: selvedge[j].Repeats,
              Mul: selvedge[j].Multiplier,
              Totalends: String(selvedge[j].TotalEnds),
              Pmdesc: selvedge[j].Description,
              Shades: selvedge[j].Shades,
              Wpmtr: selvedge[j].WtPerMeter === "" || selvedge[j].WtPerMeter === "NaN" ? "0.000" : parseFloat(selvedge[j].WtPerMeter).toFixed(3),
            }
            oModel.create("/ZPC_SELVEDGE", data, {
              success: function (oresponse) {

              },
              error: function (ores) {
                MessageBox.error("Please Check Data is not Upload in Selevdge Table");
              }
            })
          }
        }
        else if (Action === "Change") {
          var selvedge1 = this.getView().getModel("oTableDataModel").getProperty("/aTableData");

          selvedge1.map(function (items) {
            var oFilter = new sap.ui.model.Filter("Zpno", "EQ", ZPNO)
            var oFilter1 = new sap.ui.model.Filter("Zpmsno", "EQ", items.Zpmsno)
            oModel.read("/ZPC_SELVEDGE", {
              filters: [oFilter, oFilter1],
              success: function (oresponse) {
                if (oresponse.results.length > 0) {

                  var data =
                  {
                    Zpno: ZPNO,
                    Zpmsno: items.Zpmsno,
                    Rescnt: items.Rescnt === "" ? "0.000" : parseFloat(items.Rescnt).toFixed(3),
                    Zpmyqlty: items.Zpmyqlty,
                    Maktx: items.Maktx,
                    Shaft: items.Shaft,
                    Dent: items.Dent,

                    Ends: items.Ends,
                    Repeats: items.Repeats,
                    Mul: items.Mul,
                    Totalends: String(items.Totalends),
                    Pmdesc: items.Pmdesc,
                    Shades: items.Shades,
                    Wpmtr: items.Wpmtr === "" || items.Wpmtr === "NaN" ? "0.000" : parseFloat(items.Wpmtr).toFixed(3),
                  }

                  oModel.update("/ZPC_SELVEDGE(Zpno='" + items.Zpno + "',Zpmsno='" + items.Zpmsno + "')", data, {
                    success: function (oresponse) {

                    },
                    error: function (ores) {
                      MessageBox.error("Please Check Data is not Upload in Selevdge Table");
                    }
                  })

                } else {
                  var data =
                  {
                    Zpno: ZPNO,
                    Zpmsno: items.Zpmsno,
                    Rescnt: items.Rescnt === "" ? "0.000" : parseFloat(items.Rescnt).toFixed(3),
                    Zpmyqlty: items.Zpmyqlty,
                    Maktx: items.Maktx,
                    Shaft: items.Shaft,
                    Dent: items.Dent,
                    // Dent1: items.Dent1,
                    Ends: items.Ends,
                    Repeats: items.Repeats,
                    Mul: items.Mul,
                    Totalends: String(items.Totalends),
                    Pmdesc: items.Pmdesc,
                    Shades: items.Shades,
                    Wpmtr: items.Wpmtr === "" || items.Wpmtr === "NaN" ? "0.000" : parseFloat(items.Wpmtr).toFixed(3),
                  }
                  oModel.create("/ZPC_SELVEDGE", data, {
                    success: function (oresponse) {

                    },
                    error: function (ores) {
                      MessageBox.error("Please Check Data is not Upload in Selevdge Table");
                    }
                  })
                }
              }
            })
          })


        }

      },
      readmasterData: function () {
        var oBusyDialog = new sap.m.BusyDialog({
          text: "Please wait"
        });
        oBusyDialog.open();
        var oCommonModel = this.getOwnerComponent().getModel('oCommonModel');
        var Action = oCommonModel.getProperty('/displayObject').Action;
        var cardno = oCommonModel.getProperty('/displayObject').cardno;
        var oModel = this.getView().getModel();
        var oFilter = new sap.ui.model.Filter("Zpno", "EQ", cardno);

        oModel.read("/ZPC_HEADERMASTER", {
          filters: [oFilter],
          success: function (oresponse) {
            this.getView().setModel(new JSONModel(oresponse.results[0]), "oHeaderPayload");
          }.bind(this),
          error: function () {

          }.bind(this)
        });
        var TableModel1 = this.getView().getModel("oTableDataModel1");
        var aTableArr1 = TableModel1.getProperty("/aTableData1")
        var TableModel2 = this.getView().getModel("oTableDataModel2");
        var aTableArr2 = TableModel2.getProperty("/aTableData2")
        var aTablearr1 = [];
        var aTablearr2 = [];
        oModel.read("/zpc_warppattern", {
          filters: [oFilter],
          success: function (oresponse) {
            var table1 = []
            var table2 = []
            for (var i = 0; i < oresponse.results.length; i++) {
              if (oresponse.results[i].Pattern === "1") {
                table1.push(oresponse.results[i])
              }
              if (oresponse.results[i].Pattern === "2") {
                table2.push(oresponse.results[i])
              }

            }
            var data1 = table1;
            data1.map(function (data1) {
              var obj1 = {
                YarnQuality: data1.Zpmyqlty,
                YarnDescrption: data1.Maktx,
                ResultantCout: data1.Rescnt,
                endsPerRepeat: data1.Ends,
                WtperMeter: data1.Wpmtr,
                RepeatMultiplier: data1.Rep,
                p1: data1.P1,
                p2: data1.P2,
                p3: data1.P3,
                p4: data1.P4,
                p5: data1.P5,
                p6: data1.P6,
                p7: data1.P7,
                p8: data1.P8,
                p9: data1.P9,
                p10: data1.P10,
                p11: data1.P11,
                p12: data1.P12,
                p13: data1.P13,
                p14: data1.P14,
                p15: data1.P15,
                p16: data1.P16,
                p17: data1.P17,
                p18: data1.P18,
                p19: data1.P19,
                p20: data1.P20,
              }

              aTableArr1.push(obj1);
              TableModel1.setProperty("/aTableData1", aTableArr1)
            })
            var data2 = table2;
            data2.map(function (data2) {
              var obj2 = {
                YarnQuality: data2.Zpmyqlty,
                YarnDescrption: data2.Maktx,
                ResultantCout: data2.Rescnt,
                PicksPerRepeat: data2.Ends,
                WtperMeter: data2.Wpmtr,
                RepeatMultiplier: data2.Rep,
                p1: data2.P1,
                p2: data2.P2,
                p3: data2.P3,
                p4: data2.P4,
                p5: data2.P5,
                p6: data2.P6,
                p7: data2.P7,
                p8: data2.P8,
                p9: data2.P9,
                p10: data2.P10,
                p11: data2.P11,
                p12: data2.P12,
                p13: data2.P13,
                p14: data2.P14,
                p15: data2.P15,
                p16: data2.P16,
                p17: data2.P17,
                p18: data2.P18,
                p19: data2.P19,
                p20: data2.P20,
              }

              aTableArr2.push(obj2);
              TableModel2.setProperty("/aTableData2", aTableArr2)
            })


            oBusyDialog.close();
          }.bind(this),
          error: function () {
            oBusyDialog.close();
          }.bind(this)
        });
        var TableModel5 = this.getView().getModel("oTableDataModel5");
        var aTableArr5 = TableModel5.getProperty("/aTableData5")
        var aTablearr5 = [];
        oModel.read("/ZPC_SELVEDGE", {
          filters: [oFilter],
          success: function (oresponse) {
            for (var i = 0; i < oresponse.results.length; i++) {
              var obj5 = {
                Align: oresponse.results[i].Zsalign,
                Type: oresponse.results[i].Zpmtype,
                ResultantCount: oresponse.results[i].Rescnt,
                YarnQuality: oresponse.results[i].Zpmyqlty,
                YarnDesc: oresponse.results[i].Maktx,
                SelvedgeWeave: oresponse.results[i].Shaft,
                Dent: oresponse.results[i].Dent,
                Dent1: oresponse.results[i].Dent1,
                Ends: oresponse.results[i].Ends,
                Repeats: oresponse.results[i].Repeats,
                Multiplier: oresponse.results[i].Mul,
                TotalEnds: oresponse.results[i].Totalends,
                Description: oresponse.results[i].Pmdesc,
                Shades: oresponse.results[i].Shades,
                WtPerMeter: oresponse.results[i].Wpmtr,
              }
              aTableArr5.push(obj5);
              TableModel5.setProperty("/aTableData5", aTableArr5)
            }
          }.bind(this),
          error: function () {

          }.bind(this)
        });
        var TableModel3 = this.getView().getModel("oTableDataModel3");
        var aTableArr3 = TableModel3.getProperty("/aTableData3")
        var TableModel4 = this.getView().getModel("oTableDataModel4");
        var aTableArr4 = TableModel4.getProperty("/aTableData4")
        var aTablearr3 = [];
        var aTablearr4 = [];
        var array = []
        oModel.read("/ZPC_DRAFTPEGPLAN", {
          filters: [oFilter],
          success: function (oresponse) {

            var table1 = []
            var table2 = []

            for (var i = 0; i < oresponse.results.length; i++) {
              if (oresponse.results[i].Ptype === "1") {
                table1.push(oresponse.results[i])
              }
              if (oresponse.results[i].Ptype === "2") {
                table2.push(oresponse.results[i])
              }

            }
            var data1 = table1.map((res) => { return { ...res, Zpmsno: Number(res.Zpmsno) } }).sort((a, b) => a.Zpmsno - b.Zpmsno);
            data1.map(function (data1) {
              var obj3 = {
                Description: data1.Pmdesc,
                Multiplier: data1.Mul,
                Repeats: data1.Repeats,

              }

              aTableArr3.push(obj3);
              TableModel3.setProperty("/aTableData3", aTableArr3)
            })


            var data2 = table2.map((res) => { return { ...res, Zpmsno: Number(res.Zpmsno) } }).sort((a, b) => a.Zpmsno - b.Zpmsno);
            data2.map(function (data2) {
              var obj4 = {
                Description: data2.Pmdesc,
                Multiplier: data2.Mul,
                Repeats: data2.Repeats,
                Remarks: data2.Remark
              }

              aTableArr4.push(obj4);
              TableModel4.setProperty("/aTableData4", aTableArr4)
            })
            if (Action === "Copy Program Code") {
              this.copymastercard();
            }
            oBusyDialog.close();
          }.bind(this),
          error: function () {
            oBusyDialog.close();
          }.bind(this)
        });
      },

          //   OLD CODE TRUE   //

      Qualitycodesubmit_11: function () {
        var oInput = this.getView().byId("QUAco");
        var oInput1 = this.getView().byId("QUAdesc");
        var plant = this.getView().byId("plant").getValue();
        var dept = this.getView().byId("dept").getValue();
        if (plant === "") {
          MessageBox.error("Please Fill Plant");
          oInput.setValue("");
          oInput1.setValue("");
        }
        else if (dept === "") {
          MessageBox.error("Please Fill Department");
          oInput.setValue("");
          oInput1.setValue("");
        }
        else {

          if (plant === "1200" && dept === "PPC") {
            var oBusyDialog = new sap.m.BusyDialog({
              text: "Please wait"
            });
            oBusyDialog.open();
            var oModel = this.getView().getModel();
            var qualitycode = this.getView().byId("QUAco").getValue();
            var oInput = this.getView().byId("QUAco");
            var oInput1 = this.getView().byId("QUAdesc");
            var data = this.getView().getModel("oBatchData3").getProperty("/aData3");
            var oFilter = new sap.ui.model.Filter("Zpqlycode", "EQ", qualitycode);
            oModel.read("/ZPC_HEADERMASTER", {
              filters: [oFilter],
              success: function (oresponse) {
                if (oresponse.results.length === 0) {
                  var qualitydec = "";
                  data.map(function (items) {
                    if (qualitycode === items.Product)
                      qualitydec = items.ProductDescription
                  })
                  oInput1.setValue(qualitydec);
                  oBusyDialog.close();

                }
                else {
                  var zpno = oresponse.results[0].Zpno;
                  var Qualtycode = oresponse.results[0].Zpqlycode;
                  oInput.setValue("");
                  oBusyDialog.close();
                  MessageBox.error("Master Card is Already Exist For this Quality Code:-  " + Qualtycode + "   Master Card No.:  " + zpno);
                }
              }
            });
          }

          // automatically data for both wrap and weft

          // if (plant === "1200" && dept === "PPC") {
          //   var oBusyDialog = new sap.m.BusyDialog({
          //     text: "Please wait"
          //   });
          //   oBusyDialog.open();

          //   var oModel = this.getView().getModel();
          //   var qualitycode = this.getView().byId("QUAco").getValue();
          //   var oInput = this.getView().byId("QUAco");
          //   var oInput1 = this.getView().byId("QUAdesc");
          //   var data = this.getView().getModel("oBatchData3").getProperty("/aData3");

          //   // Filter for the first entity ZPC_HEADERMASTER
          //   var oFilter = new sap.ui.model.Filter("Zpqlycode", "EQ", qualitycode);
          //   var anotherEntityFilter = new sap.ui.model.Filter("Material", "EQ", qualitycode); // Adjust filter as needed

          //   oModel.read("/ZPC_HEADERMASTER", {
          //     filters: [oFilter],
          //     success: function (oresponse) {
          //       if (oresponse.results.length === 0) {
          //         var qualitydec = "";
          //         data.map(function (items) {
          //           if (qualitycode === items.Product)
          //             qualitydec = items.ProductDescription;
          //         });
          //         oInput1.setValue(qualitydec);

          //         // Request additional fields from ZPP_SORTMASTER_CDS
          //         oModel.read("/ZPP_SORTMASTER_CDS", {
          //           filters: [anotherEntityFilter],
          //           success: function (anotherResponse) {
          //             if (anotherResponse.results.length > 0) {
          //               // Check if table model 'oTableDataModel1' exists
          //               var oTableModel1 = this.getView().getModel("oTableDataModel1");
          //               if (oTableModel1) {
          //                 var aTableData1 = oTableModel1.getProperty("/aTableData1") || [];

          //                 anotherResponse.results.forEach(function (item) {
          //                   var obj = {
          //                     YarnQuality: item.Warptype1,
          //                     YarnDescrption: item.warptypedesc1
          //                   };
          //                   aTableData1.push(obj);
          //                 });

          //                 // Update the model with new data
          //                 oTableModel1.setProperty("/aTableData1", aTableData1);
          //               } else {
          //                 console.error("Table model 'oTableDataModel1' is not defined.");
          //               }

          //               // Check if table model 'oTableDataModel2' exists
          //               var oTableModel2 = this.getView().getModel("oTableDataModel2");
          //               if (oTableModel2) {
          //                 var aTableData2 = oTableModel2.getProperty("/aTableData2") || [];

          //                 anotherResponse.results.forEach(function (item) {
          //                   var obj = {
          //                     YarnQuality: item.Wefttype1,
          //                     YarnDescrption: item.wefttypedesc1
          //                   };
          //                   aTableData2.push(obj);
          //                 });

          //                 // Update the model with new data
          //                 oTableModel2.setProperty("/aTableData2", aTableData2);
          //               } else {
          //                 console.error("Table model 'oTableDataModel2' is not defined.");
          //               }

          //               oBusyDialog.close(); // Close after updating both table models
          //             } else {
          //               // Handle case where no data is returned
          //               console.warn("No data found for the specified Material.");
          //               oBusyDialog.close();
          //             }
          //           }.bind(this),
          //           error: function (err) {
          //             oBusyDialog.close();
          //             MessageBox.error("Error fetching additional data from ZPP_SORTMASTER_CDS");
          //           }
          //         });

          //       } else {
          //         var zpno = oresponse.results[0].Zpno;
          //         var Qualtycode = oresponse.results[0].Zpqlycode;
          //         oInput.setValue("");
          //         oBusyDialog.close();
          //         MessageBox.error("Master Card is Already Exist For this Quality Code: " + Qualtycode + "   Master Card No.: " + zpno);
          //       }
          //     }.bind(this),
          //     error: function (err) {
          //       oBusyDialog.close();
          //       MessageBox.error("Error fetching data from ZPC_HEADERMASTER");
          //     }
          //   });
          // }



          else if (plant === "1300" && dept === "PPC") {
            var oBusyDialog = new sap.m.BusyDialog({
              text: "Please wait"
            });
            oBusyDialog.open();
            var oModel = this.getView().getModel();
            var qualitycode = this.getView().byId("QUAco").getValue();
            var oInput = this.getView().byId("QUAco");
            var oInput1 = this.getView().byId("QUAdesc");
            var data = this.getView().getModel("oBatchData2").getProperty("/aData2");
            var oFilter = new sap.ui.model.Filter("Zpqlycode", "EQ", qualitycode);
            oModel.read("/ZPC_HEADERMASTER", {
              filters: [oFilter],
              success: function (oresponse) {
                if (oresponse.results.length === 0) {
                  var qualitydec = "";
                  data.map(function (items) {
                    if (qualitycode === items.Product)
                      qualitydec = items.ProductDescription
                  })
                  oInput1.setValue(qualitydec);
                  oBusyDialog.close();

                }
                else {
                  var zpno = oresponse.results[0].Zpno;
                  var Qualtycode = oresponse.results[0].Zpqlycode;
                  oInput.setValue("");
                  oBusyDialog.close();
                  MessageBox.error("Master Card is Already Exist For this Quality Code:-  " + Qualtycode + "   Master Card No.:  " + zpno);
                }
              }
            });
          }
          else if (dept === "PD") {
            var oBusyDialog = new sap.m.BusyDialog({
              text: "Please wait"
            });
            oBusyDialog.open();
            var oModel = this.getView().getModel();
            var qualitycode = this.getView().byId("QUAco").getValue();
            var oInput = this.getView().byId("QUAco");
            var oInput1 = this.getView().byId("QUAdesc");
            var data = this.getView().getModel("oBatchData1").getProperty("/aData1");
            var oFilter = new sap.ui.model.Filter("Zpqlycode", "EQ", qualitycode);
            oModel.read("/ZPC_HEADERMASTER", {
              filters: [oFilter],
              success: function (oresponse) {
                if (oresponse.results.length === 0) {
                  var qualitydec = "";
                  data.map(function (items) {
                    if (qualitycode === items.Product)
                      qualitydec = items.ProductDescription
                  })
                  oInput1.setValue(qualitydec);
                  oBusyDialog.close();

                }
                else {
                  var zpno = oresponse.results[0].Zpno;
                  var Qualtycode = oresponse.results[0].Zpqlycode;
                  oInput.setValue("");
                  oBusyDialog.close();
                  MessageBox.error("Master Card is Already Exist For this Quality Code:-  " + Qualtycode + "   Master Card No.:  " + zpno);
                }
              }
            });
          }

        }



      },
      onReadNumberRange: function () {
        var oInput = this.getView().byId("masc");
        var plant = this.getView().byId("plant").getValue();
        if (plant === '1100') {
          var num = "01"
        } else if (plant === '1200') {
          var num = "02"
        } else if (plant === '1300') {
          var num = "03"
        } else if (plant === '1310') {
          var num = "04"
        } else if (plant === '1400') {
          var num = "05"
        } else if (plant === '2100') {
          var num = "06"
        }
        else if (plant === '2200') {
          var num = "07"
        }
        // var url = "/numberrange/?&nrrangenr=01";
        var url1 = "/sap/bc/http/sap/zpno_htt?sap-client=080&numc=";
        var url = url1 + num;
        // var url = "/numberrange";
        var username = "ZSAP_4MUSER";
        var password = "LECapyZCfBppljSuk}TVWLSAUpS7RgmNLLaoFrAS";
        $.ajax({
          url: url,
          type: "GET",
          beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.username = username;
            xhr.password = password;
          },
          success: function (result) {
            oInput.setValue(result);
            this.SAVEMASTERCARD();
          }.bind(this)
        });

      },
      onformulawarp: function (oEvent) {
        var plant = this.getView().byId("plant").getValue();
        if (plant != "2100") {
          var slevedge = this.getView().getModel("oTableDataModel5").getProperty("/aTableData5");
          var WtP = 0;
          slevedge.map(function (items) {
            WtP = WtP + Number(items.WtPerMeter)
          })
          var weft = this.getView().getModel("oTableDataModel1").getProperty("/aTableData1");
          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel1");
          this.getView().getModel("oTableDataModel1").setProperty("/aTableData1", []);
          var TableModel = this.getView().getModel("oTableDataModel1");
          var aTableArr1 = TableModel.getProperty("/aTableData1")
          var aTablearr1 = [];

          var bodend = Number(this.getView().byId("bodend").getValue());
          // var EPI = Number(this.getView().byId("EPI").getValue());
          // var reedspace = Number(this.getView().byId("reeds").getValue());
          var p1m1 = 0; var p2m1 = 0; var p3m1 = 0; var p4m1 = 0; var p5m1 = 0; var p6m1 = 0; var p7m1 = 0; var p8m1 = 0; var p9m1 = 0; var p10m1 = 0; var p11m1 = 0; var p12m1 = 0; var p13m1 = 0; var p14m1 = 0; var p15m1 = 0; var p16m1 = 0; var p17m1 = 0; var p18m1 = 0; var p19m1 = 0; var p20m1 = 0;
          var p1m2 = 0; var p2m2 = 0; var p3m2 = 0; var p4m2 = 0; var p5m2 = 0; var p6m2 = 0; var p7m2 = 0; var p8m2 = 0; var p9m2 = 0; var p10m2 = 0; var p11m2 = 0; var p12m2 = 0; var p13m2 = 0; var p14m2 = 0; var p15m2 = 0; var p16m2 = 0; var p17m2 = 0; var p18m2 = 0; var p19m2 = 0; var p20m2 = 0;

          var p1r1 = ""; var p2r1 = ""; var p3r1 = ""; var p4r1 = ""; var p5r1 = ""; var p6r1 = ""; var p7r1 = ""; var p8r1 = ""; var p9r1 = ""; var p10r1 = ""; var p11r1 = ""; var p12r1 = ""; var p13r1 = ""; var p14r1 = ""; var p15r1 = ""; var p16r1 = ""; var p17r1 = ""; var p18r1 = ""; var p19r1 = ""; var p20r1 = "";
          var p1r2 = ""; var p2r2 = ""; var p3r2 = ""; var p4r2 = ""; var p5r2 = ""; var p6r2 = ""; var p7r2 = ""; var p8r2 = ""; var p9r2 = ""; var p10r2 = ""; var p11r2 = ""; var p12r2 = ""; var p13r2 = ""; var p14r2 = ""; var p15r2 = ""; var p16r2 = ""; var p17r2 = ""; var p18r2 = ""; var p19r2 = ""; var p20r2 = "";
          for (var i = 0; i < weft.length; i++) {
            if (weft[i].RepeatMultiplier === "R1") {
              weft[i].WtperMeter = "0";
              weft[i].endsPerRepeat = "0";
              if (weft[i].p1 != "") {
                p1r1 = weft[i].p1;
              }
              if (weft[i].p2 != "") {
                p2r1 = weft[i].p2;
              }
              if (weft[i].p3 != "") {
                p3r1 = weft[i].p3;
              }
              if (weft[i].p4 != "") {
                p4r1 = weft[i].p4;
              }
              if (weft[i].p5 != "") {
                p5r1 = weft[i].p5;
              }
              if (weft[i].p6 != "") {
                p6r1 = weft[i].p6;
              }
              if (weft[i].p7 != "") {
                p7r1 = weft[i].p7;
              }
              if (weft[i].p8 != "") {
                p8r1 = weft[i].p8;
              }
              if (weft[i].p9 != "") {
                p9r1 = weft[i].p9;
              }
              if (weft[i].p10 != "") {
                p10r1 = weft[i].p10;
              }
              if (weft[i].p11 != "") {
                p11r1 = weft[i].p11;
              }
              if (weft[i].p12 != "") {
                p12r1 = weft[i].p12;
              }
              if (weft[i].p13 != "") {
                p13r1 = weft[i].p13;
              }
              if (weft[i].p14 != "") {
                p14r1 = weft[i].p14;
              }
              if (weft[i].p15 != "") {
                p15r1 = weft[i].p15;
              }
              if (weft[i].p16 != "") {
                p16r1 = weft[i].p16;
              }
              if (weft[i].p17 != "") {
                p17r1 = weft[i].p17;
              }
              if (weft[i].p18 != "") {
                p18r1 = weft[i].p18;
              }
              if (weft[i].p19 != "") {
                p19r1 = weft[i].p19;
              }
              if (weft[i].p20 != "") {
                p20r1 = weft[i].p20;
              }
            }
            else if (weft[i].RepeatMultiplier === "R2") {
              weft[i].WtperMeter = "0";
              weft[i].endsPerRepeat = "0";
              if (weft[i].p1 != "") {
                p1r2 = weft[i].p1;
              }
              if (weft[i].p2 != "") {
                p2r2 = weft[i].p2;
              }
              if (weft[i].p3 != "") {
                p3r2 = weft[i].p3;
              }
              if (weft[i].p4 != "") {
                p4r2 = weft[i].p4;
              }
              if (weft[i].p5 != "") {
                p5r2 = weft[i].p5;
              }
              if (weft[i].p6 != "") {
                p6r2 = weft[i].p6;
              }
              if (weft[i].p7 != "") {
                p7r2 = weft[i].p7;
              }
              if (weft[i].p8 != "") {
                p8r2 = weft[i].p8;
              }
              if (weft[i].p9 != "") {
                p9r2 = weft[i].p9;
              }
              if (weft[i].p10 != "") {
                p10r2 = weft[i].p10;
              }
              if (weft[i].p11 != "") {
                p11r2 = weft[i].p11;
              }
              if (weft[i].p12 != "") {
                p12r2 = weft[i].p12;
              }
              if (weft[i].p13 != "") {
                p13r2 = weft[i].p13;
              }
              if (weft[i].p14 != "") {
                p14r2 = weft[i].p14;
              }
              if (weft[i].p15 != "") {
                p15r2 = weft[i].p15;
              }
              if (weft[i].p16 != "") {
                p16r2 = weft[i].p16;
              }
              if (weft[i].p17 != "") {
                p17r2 = weft[i].p17;
              }
              if (weft[i].p18 != "") {
                p18r2 = weft[i].p18;
              }
              if (weft[i].p19 != "") {
                p19r2 = weft[i].p19;
              }
              if (weft[i].p20 != "") {
                p20r2 = weft[i].p20;
              }
            }
            else if (weft[i].RepeatMultiplier === "M1") {
              weft[i].endsPerRepeat = "0";
              weft[i].WtperMeter = "0";




              // for p1
              if (weft[i].p1 != "") {
                p1m1 = Number(weft[i].p1);
              }


              //  for p2
              if (p1r1 === "[" && p2r1 === "") {
                p2m1 = Number(weft[i].p1);
              }
              else if (p1r1 === "[" && p2r1 === "]") {
                p2m1 = Number(weft[i].p1);
              }
              else
                if (weft[i].p2 != "") {

                  p2m1 = Number(weft[i].p2);
                }

              //  for p3
              if (p1r1 === "[" && p2r1 === "" && p3r1 === "") {
                p3m1 = Number(weft[i].p1);
              }
              else
                if (p1r1 === "[" && p2r1 === "" && p3r1 === "]") {
                  p3m1 = Number(weft[i].p1);

                }
                else if (p2r1 === "[" && p3r1 === "") {
                  p3m1 = Number(weft[i].p2);
                }
                else if (p2r1 === "[" && p3r1 === "]") {
                  p3m1 = Number(weft[i].p2);
                }
                else
                  if (weft[i].p3 != "") {
                    p3m1 = Number(weft[i].p3);

                  }

              //  for p4
              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "") {
                p4m1 = Number(weft[i].p1);
              }
              else
                if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "]") {
                  p4m1 = Number(weft[i].p1);
                }
                else if (p2r1 === "[" && p3r1 === "" && p4r1 === "") {
                  p4m1 = Number(weft[i].p2);
                }
                else if (p2r1 === "[" && p3r1 === "" && p4r1 === "]") {
                  p4m1 = Number(weft[i].p2);
                }
                else if (p3r1 === "[" && p4r1 === "]") {
                  p4m1 = Number(weft[i].p3);
                }
                else if (p3r1 === "[" && p4r1 === "") {
                  p4m1 = Number(weft[i].p3);
                }
                else if (weft[i].p4 != "") {
                  p4m1 = Number(weft[i].p4);
                }




              // for p5
              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "") {
                p5m1 = Number(weft[i].p1);
              }
              else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "]") {
                p5m1 = Number(weft[i].p1);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "]") {
                p5m1 = Number(weft[i].p2);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "") {
                p5m1 = Number(weft[i].p2);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "") {
                p5m1 = Number(weft[i].p3);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "]") {
                p5m1 = Number(weft[i].p3);
              }
              else if (p4r1 === "[" && p5r1 === "") {
                p5m1 = Number(weft[i].p4);
              }
              else if (p4r1 === "[" && p5r1 === "]") {
                p5m1 = Number(weft[i].p4);
              }
              else if (weft[i].p5 != "") {
                p5m1 = Number(weft[i].p5);
              }

              // for p6
              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "") {
                p6m1 = Number(weft[i].p1);
              }
              else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "]") {
                p6m1 = Number(weft[i].p1);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "") {
                p6m1 = Number(weft[i].p2);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "]") {
                p6m1 = Number(weft[i].p2);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "") {
                p6m1 = Number(weft[i].p3);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "]") {
                p6m1 = Number(weft[i].p3);
              }
              else if (p4r1 === "[" && p5r1 === "" && p6r1 === "") {
                p6m1 = Number(weft[i].p4);
              }
              else if (p4r1 === "[" && p5r1 === "" && p6r1 === "]") {
                p6m1 = Number(weft[i].p4);
              }
              else if (p5r1 === "[" && p6r1 === "") {
                p6m1 = Number(weft[i].p5);
              }
              else if (p5r1 === "[" && p6r1 === "]") {
                p6m1 = Number(weft[i].p5);
              }
              else if (weft[i].p6 != "") {
                p6m1 = Number(weft[i].p6);
              }

              // for p7

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "") {
                p7m1 = Number(weft[i].p1);
              }
              else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "]") {
                p7m1 = Number(weft[i].p1);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "") {
                p7m1 = Number(weft[i].p2);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "]") {
                p7m1 = Number(weft[i].p2);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "") {
                p7m1 = Number(weft[i].p3);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "]") {
                p7m1 = Number(weft[i].p3);
              }
              else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "") {
                p7m1 = Number(weft[i].p4);
              }
              else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "]") {
                p7m1 = Number(weft[i].p4);
              }
              else if (p5r1 === "[" && p6r1 === "" && p7r1 === "") {
                p7m1 = Number(weft[i].p5);
              }
              else if (p5r1 === "[" && p6r1 === "" && p7r1 === "]") {
                p7m1 = Number(weft[i].p5);
              }
              else if (p6r1 === "[" && p7r1 === "") {
                p7m1 = Number(weft[i].p6);
              }
              else if (p6r1 === "[" && p7r1 === "]") {
                p7m1 = Number(weft[i].p6);
              }
              else if (weft[i].p7 != "") {
                p7m1 = Number(weft[i].p7);
              }








              // for p8
              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "") {
                p8m1 = Number(weft[i].p1);
              }
              else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "]") {
                p8m1 = Number(weft[i].p1);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "") {
                p8m1 = Number(weft[i].p2);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "]") {
                p8m1 = Number(weft[i].p2);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "") {
                p8m1 = Number(weft[i].p3);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "]") {
                p8m1 = Number(weft[i].p3);
              }
              else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "") {
                p8m1 = Number(weft[i].p4);
              }
              else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "]") {
                p8m1 = Number(weft[i].p4);
              }
              else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "") {
                p8m1 = Number(weft[i].p5);
              }
              else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "]") {
                p8m1 = Number(weft[i].p5);
              }
              else if (p6r1 === "[" && p7r1 === "" && p8r1 === "") {
                p8m1 = Number(weft[i].p6);
              }
              else if (p6r1 === "[" && p7r1 === "" && p8r1 === "]") {
                p8m1 = Number(weft[i].p6);
              }
              else if (p7r1 === "[" && p8r1 === "") {
                p8m1 = Number(weft[i].p7);
              }
              else if (p7r1 === "[" && p8r1 === "]") {
                p8m1 = Number(weft[i].p7);
              }
              else if (weft[i].p8 != "") {
                p8m1 = Number(weft[i].p8);
              }







              // for p9
              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
                p9m1 = Number(weft[i].p1);
              }
              else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
                p9m1 = Number(weft[i].p1);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
                p9m1 = Number(weft[i].p2);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
                p9m1 = Number(weft[i].p2);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
                p9m1 = Number(weft[i].p3);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
                p9m1 = Number(weft[i].p3);
              }
              else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
                p9m1 = Number(weft[i].p4);
              }
              else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
                p9m1 = Number(weft[i].p4);
              }
              else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
                p9m1 = Number(weft[i].p5);
              }
              else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
                p9m1 = Number(weft[i].p5);
              }
              else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
                p9m1 = Number(weft[i].p6);
              }
              else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
                p9m1 = Number(weft[i].p6);
              }
              else if (p7r1 === "[" && p8r1 === "" && p9r1 === "") {
                p9m1 = Number(weft[i].p7);
              }
              else if (p7r1 === "[" && p8r1 === "" && p9r1 === "]") {
                p9m1 = Number(weft[i].p7);
              }
              else if (p8r1 === "[" && p9r1 === "") {
                p9m1 = Number(weft[i].p8);
              }
              else if (p8r1 === "[" && p9r1 === "]") {
                p9m1 = Number(weft[i].p8);
              }
              else if (weft[i].p9 != "") {
                p9m1 = Number(weft[i].p9);
              }


              // for p10

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
                p10m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
                p10m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
                p10m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
                p10m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
                p10m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
                p10m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
                p10m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
                p10m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
                p10m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
                p10m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
                p10m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
                p10m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
                p10m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
                p10m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "") {
                p10m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "]") {
                p10m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "") {
                p10m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "]") {
                p10m1 = Number(weft[i].p9);
              } else if (weft[i].p10 !== "") {
                p10m1 = Number(weft[i].p10);
              }

              // for p11

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "") {
                p11m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "]") {
                p11m1 = Number(weft[i].p10);
              }
              else if (weft[i].p11 !== "") {
                p11m1 = Number(weft[i].p11);
              }

              // for p12

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "") {
                p12m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "]") {
                p12m1 = Number(weft[i].p11);
              } else if (weft[i].p12 !== "") {
                p12m1 = Number(weft[i].p12);
              }

              // for p13

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p11);
              } else if (p12r1 === "[" && p13r1 === "") {
                p13m1 = Number(weft[i].p12);
              } else if (p12r1 === "[" && p13r1 === "]") {
                p13m1 = Number(weft[i].p12);
              } else if (weft[i].p13 !== "") {
                p13m1 = Number(weft[i].p13);
              }


              // for p14


              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p11);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p12);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p12);
              } else if (p13r1 === "[" && p14r1 === "") {
                p14m1 = Number(weft[i].p13);
              } else if (p13r1 === "[" && p14r1 === "]") {
                p14m1 = Number(weft[i].p13);
              } else if (weft[i].p14 !== "") {
                p14m1 = Number(weft[i].p14);
              }


              // for p15

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p11);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p12);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p12);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p13);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p13);
              } else if (p14r1 === "[" && p15r1 === "") {
                p15m1 = Number(weft[i].p14);
              } else if (p14r1 === "[" && p15r1 === "]") {
                p15m1 = Number(weft[i].p14);
              } else if (weft[i].p15 !== "") {
                p15m1 = Number(weft[i].p15);
              }

              // for p16

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p11);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p12);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p12);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p13);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p13);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p14);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p14);
              } else if (p15r1 === "[" && p16r1 === "") {
                p16m1 = Number(weft[i].p15);
              } else if (p15r1 === "[" && p16r1 === "]") {
                p16m1 = Number(weft[i].p15);
              } else if (weft[i].p16 !== "") {
                p16m1 = Number(weft[i].p16);
              }


              // for p17

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p11);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p12);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p12);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p13);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p13);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p14);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p14);
              } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p15);
              } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p15);
              } else if (p16r1 === "[" && p17r1 === "") {
                p17m1 = Number(weft[i].p16);
              } else if (p16r1 === "[" && p17r1 === "]") {
                p17m1 = Number(weft[i].p16);
              } else if (weft[i].p17 !== "") {
                p17m1 = Number(weft[i].p17);
              }



              // for p18

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p11);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p12);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p12);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p13);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p13);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p14);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p14);
              } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p15);
              } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p15);
              } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p16);
              } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p16);
              } else if (p17r1 === "[" && p18r1 === "") {
                p18m1 = Number(weft[i].p17);
              } else if (p17r1 === "[" && p18r1 === "]") {
                p18m1 = Number(weft[i].p17);
              } else if (weft[i].p18 !== "") {
                p18m1 = Number(weft[i].p18);
              }


              // for p19


              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p11);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p12);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p12);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p13);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p13);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p14);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p14);
              } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p15);
              } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p15);
              } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p16);
              } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p16);
              } else if (p17r1 === "[" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p17);
              } else if (p17r1 === "[" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p17);
              } else if (p18r1 === "[" && p19r1 === "") {
                p19m1 = Number(weft[i].p18);
              } else if (p18r1 === "[" && p19r1 === "]") {
                p19m1 = Number(weft[i].p18);
              } else if (weft[i].p19 !== "") {
                p19m1 = Number(weft[i].p19);
              }


              // for p20

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p11);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p12);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p12);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p13);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p13);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p14);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p14);
              } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p15);
              } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p15);
              } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p16);
              } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p16);
              } else if (p17r1 === "[" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p17);
              } else if (p17r1 === "[" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p17);
              } else if (p18r1 === "[" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p18);
              } else if (p18r1 === "[" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p18);
              } else if (p19r1 === "[" && p20r1 === "") {
                p20m1 = Number(weft[i].p19);
              } else if (p19r1 === "[" && p20r1 === "]") {
                p20m1 = Number(weft[i].p19);
              } else if (weft[i].p20 !== "") {
                p20m1 = Number(weft[i].p20);
              }

            }
            else if (weft[i].RepeatMultiplier === "M2") {
              weft[i].endsPerRepeat = "0";
              weft[i].WtperMeter = "0";

              // for p1
              if (weft[i].p1 != "") {
                p1m2 = Number(weft[i].p1);
              }


              //  for p2
              if (p1r2 === "[" && p2r2 === "") {
                p2m2 = Number(weft[i].p1);
              }
              else if (p1r2 === "[" && p2r2 === "]") {
                p2m2 = Number(weft[i].p1);
              }
              else
                if (weft[i].p2 != "") {

                  p2m2 = Number(weft[i].p2);
                }



              //  for p3
              if (p1r2 === "[" && p2r2 === "" && p3r2 === "") {
                p3m2 = Number(weft[i].p1);
              }
              else
                if (p1r2 === "[" && p2r2 === "" && p3r2 === "]") {
                  p3m2 = Number(weft[i].p1);

                }
                else if (p2r2 === "[" && p3r2 === "") {
                  p3m2 = Number(weft[i].p2);
                }
                else if (p2r2 === "[" && p3r2 === "]") {
                  p3m2 = Number(weft[i].p2);
                }
                else
                  if (weft[i].p3 != "") {
                    p3m2 = Number(weft[i].p3);

                  }

              //  for p4
              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "") {
                p4m2 = Number(weft[i].p1);
              }
              else
                if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "]") {
                  p4m2 = Number(weft[i].p1);
                }
                else if (p2r2 === "[" && p3r2 === "" && p4r2 === "") {
                  p4m2 = Number(weft[i].p2);
                }
                else if (p2r2 === "[" && p3r2 === "" && p4r2 === "]") {
                  p4m2 = Number(weft[i].p2);
                }
                else if (p3r2 === "[" && p4r2 === "]") {
                  p4m2 = Number(weft[i].p3);
                }
                else if (p3r2 === "[" && p4r2 === "") {
                  p4m2 = Number(weft[i].p3);
                }
                else if (weft[i].p4 != "") {
                  p4m2 = Number(weft[i].p4);
                }




              // for p5
              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "") {
                p5m2 = Number(weft[i].p1);
              }
              else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "]") {
                p5m2 = Number(weft[i].p1);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "]") {
                p5m2 = Number(weft[i].p2);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "") {
                p5m2 = Number(weft[i].p2);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "") {
                p5m2 = Number(weft[i].p3);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "]") {
                p5m2 = Number(weft[i].p3);
              }
              else if (p4r2 === "[" && p5r2 === "") {
                p5m2 = Number(weft[i].p4);
              }
              else if (p4r2 === "[" && p52 === "]") {
                p5m2 = Number(weft[i].p4);
              }
              else if (weft[i].p5 != "") {
                p5m2 = Number(weft[i].p5);
              }

              // for p6
              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "") {
                p6m2 = Number(weft[i].p1);
              }
              else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "]") {
                p6m2 = Number(weft[i].p1);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "") {
                p6m2 = Number(weft[i].p2);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "]") {
                p6m2 = Number(weft[i].p2);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "") {
                p6m2 = Number(weft[i].p3);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "]") {
                p6m2 = Number(weft[i].p3);
              }
              else if (p4r2 === "[" && p5r2 === "" && p6r2 === "") {
                p6m2 = Number(weft[i].p4);
              }
              else if (p4r2 === "[" && p5r2 === "" && p6r2 === "]") {
                p6m2 = Number(weft[i].p4);
              }
              else if (p5r2 === "[" && p6r2 === "") {
                p6m2 = Number(weft[i].p5);
              }
              else if (p5r2 === "[" && p6r2 === "]") {
                p6m2 = Number(weft[i].p5);
              }
              else if (weft[i].p6 != "") {
                p6m2 = Number(weft[i].p6);
              }

              // for p7

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "") {
                p7m2 = Number(weft[i].p1);
              }
              else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "]") {
                p7m2 = Number(weft[i].p1);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "") {
                p7m2 = Number(weft[i].p2);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "]") {
                p7m2 = Number(weft[i].p2);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "") {
                p7m2 = Number(weft[i].p3);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "]") {
                p7m2 = Number(weft[i].p3);
              }
              else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "") {
                p7m2 = Number(weft[i].p4);
              }
              else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "]") {
                p7m2 = Number(weft[i].p4);
              }
              else if (p5r2 === "[" && p6r2 === "" && p7r2 === "") {
                p7m2 = Number(weft[i].p5);
              }
              else if (p5r2 === "[" && p6r2 === "" && p7r2 === "]") {
                p7m2 = Number(weft[i].p5);
              }
              else if (p6r2 === "[" && p7r2 === "") {
                p7m2 = Number(weft[i].p6);
              }
              else if (p6r2 === "[" && p7r2 === "]") {
                p7m2 = Number(weft[i].p6);
              }
              else if (weft[i].p7 != "") {
                p7m2 = Number(weft[i].p7);
              }

              // for p8
              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "") {
                p8m2 = Number(weft[i].p1);
              }
              else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "]") {
                p8m2 = Number(weft[i].p1);
              }
              else if (p2r1 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "") {
                p8m2 = Number(weft[i].p2);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "]") {
                p8m2 = Number(weft[i].p2);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "") {
                p8m2 = Number(weft[i].p3);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "]") {
                p8m2 = Number(weft[i].p3);
              }
              else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "") {
                p8m2 = Number(weft[i].p4);
              }
              else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "]") {
                p8m2 = Number(weft[i].p4);
              }
              else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "") {
                p8m2 = Number(weft[i].p5);
              }
              else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "]") {
                p8m2 = Number(weft[i].p5);
              }
              else if (p6r2 === "[" && p7r2 === "" && p8r2 === "") {
                p8m2 = Number(weft[i].p6);
              }
              else if (p6r2 === "[" && p7r2 === "" && p8r2 === "]") {
                p8m2 = Number(weft[i].p6);
              }
              else if (p7r2 === "[" && p8r2 === "") {
                p8m2 = Number(weft[i].p7);
              }
              else if (p7r2 === "[" && p8r2 === "]") {
                p8m2 = Number(weft[i].p7);
              }
              else if (weft[i].p8 != "") {
                p8m2 = Number(weft[i].p8);
              }

              // for p9
              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
                p9m2 = Number(weft[i].p1);
              }
              else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
                p9m2 = Number(weft[i].p1);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
                p9m2 = Number(weft[i].p2);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
                p9m2 = Number(weft[i].p2);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
                p9m2 = Number(weft[i].p3);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
                p9m2 = Number(weft[i].p3);
              }
              else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
                p9m2 = Number(weft[i].p4);
              }
              else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
                p9m2 = Number(weft[i].p4);
              }
              else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
                p9m2 = Number(weft[i].p5);
              }
              else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
                p9m2 = Number(weft[i].p5);
              }
              else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
                p9m2 = Number(weft[i].p6);
              }
              else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
                p9m2 = Number(weft[i].p6);
              }
              else if (p7r2 === "[" && p8r2 === "" && p9r2 === "") {
                p9m2 = Number(weft[i].p7);
              }
              else if (p7r2 === "[" && p8r2 === "" && p9r2 === "]") {
                p9m2 = Number(weft[i].p7);
              }
              else if (p8r2 === "[" && p9r2 === "") {
                p9m2 = Number(weft[i].p8);
              }
              else if (p8r2 === "[" && p9r2 === "]") {
                p9m2 = Number(weft[i].p8);
              }
              else if (weft[i].p9 != "") {
                p9m2 = Number(weft[i].p9);
              }



              // for p10

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
                p10m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
                p10m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
                p10m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
                p10m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
                p10m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
                p10m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
                p10m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
                p10m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
                p10m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
                p10m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
                p10m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
                p10m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
                p10m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
                p10m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "") {
                p10m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "]") {
                p10m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "") {
                p10m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "]") {
                p10m2 = Number(weft[i].p9);
              } else if (weft[i].p10 !== "") {
                p10m2 = Number(weft[i].p10);
              }

              // for p11

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "") {
                p11m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "]") {
                p11m2 = Number(weft[i].p10);
              }
              else if (weft[i].p11 !== "") {
                p11m2 = Number(weft[i].p11);
              }

              // for p12

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "") {
                p12m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "]") {
                p12m2 = Number(weft[i].p11);
              } else if (weft[i].p12 !== "") {
                p12m2 = Number(weft[i].p12);
              }

              // for p13

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p11);
              } else if (p12r2 === "[" && p13r2 === "") {
                p13m2 = Number(weft[i].p12);
              } else if (p12r2 === "[" && p13r2 === "]") {
                p13m2 = Number(weft[i].p12);
              } else if (weft[i].p13 !== "") {
                p13m2 = Number(weft[i].p13);
              }


              // for p14


              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p11);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p12);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p12);
              } else if (p13r2 === "[" && p14r2 === "") {
                p14m2 = Number(weft[i].p13);
              } else if (p13r2 === "[" && p14r2 === "]") {
                p14m2 = Number(weft[i].p13);
              } else if (weft[i].p14 !== "") {
                p14m2 = Number(weft[i].p14);
              }


              // for p15

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p11);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p12);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p12);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p13);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p13);
              } else if (p14r2 === "[" && p15r2 === "") {
                p15m2 = Number(weft[i].p14);
              } else if (p14r2 === "[" && p15r2 === "]") {
                p15m2 = Number(weft[i].p14);
              } else if (weft[i].p15 !== "") {
                p15m2 = Number(weft[i].p15);
              }

              // for p16

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p11);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p12);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p12);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p13);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p13);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p14);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p14);
              } else if (p15r2 === "[" && p16r2 === "") {
                p16m2 = Number(weft[i].p15);
              } else if (p15r2 === "[" && p16r2 === "]") {
                p16m2 = Number(weft[i].p15);
              } else if (weft[i].p16 !== "") {
                p16m2 = Number(weft[i].p16);
              }


              // for p17

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p11);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p12);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p12);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p13);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p13);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p14);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p14);
              } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p15);
              } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p15);
              } else if (p16r2 === "[" && p17r2 === "") {
                p17m2 = Number(weft[i].p16);
              } else if (p16r2 === "[" && p17r2 === "]") {
                p17m2 = Number(weft[i].p16);
              } else if (weft[i].p17 !== "") {
                p17m2 = Number(weft[i].p17);
              }



              // for p18

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p11);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p12);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p12);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p13);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p13);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p14);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p14);
              } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p15);
              } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p15);
              } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p16);
              } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p16);
              } else if (p17r2 === "[" && p18r2 === "") {
                p18m2 = Number(weft[i].p17);
              } else if (p17r2 === "[" && p18r2 === "]") {
                p18m2 = Number(weft[i].p17);
              } else if (weft[i].p18 !== "") {
                p18m2 = Number(weft[i].p18);
              }


              // for p19


              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p11);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p12);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p12);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p13);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p13);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p14);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p14);
              } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p15);
              } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p15);
              } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p16);
              } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p16);
              } else if (p17r2 === "[" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p17);
              } else if (p17r2 === "[" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p17);
              } else if (p18r2 === "[" && p19r2 === "") {
                p19m2 = Number(weft[i].p18);
              } else if (p18r2 === "[" && p19r2 === "]") {
                p19m2 = Number(weft[i].p18);
              } else if (weft[i].p19 !== "") {
                p19m2 = Number(weft[i].p19);
              }


              // for p20

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p11);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p12);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p12);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p13);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p13);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p14);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p14);
              } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p15);
              } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p15);
              } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p16);
              } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p16);
              } else if (p17r2 === "[" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p17);
              } else if (p17r2 === "[" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p17);
              } else if (p18r2 === "[" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p18);
              } else if (p18r2 === "[" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p18);
              } else if (p19r2 === "[" && p20r2 === "") {
                p20m2 = Number(weft[i].p19);
              } else if (p19r2 === "[" && p20r2 === "]") {
                p20m2 = Number(weft[i].p19);
              } else if (weft[i].p20 !== "") {
                p20m2 = Number(weft[i].p20);
              }
            }
            else if (weft[i].RepeatMultiplier != "R1" && weft[i].RepeatMultiplier != "M1" && weft[i].RepeatMultiplier != "R2" && weft[i].RepeatMultiplier != "M2") {
              var total = 0;
              if (weft[i].p1 != "") {
                var P1 = p1m1 + p1m2;
                if (P1 === 0) {
                  total = total + (Number(weft[i].p1));
                }
                else {

                  if (p1m1 > 0 && p1m2 > 0) {
                    var a = (Number(weft[i].p1) * p1m1);
                    var b = a * p1m2;

                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p1) * P1);
                  }

                }

              }
              if (weft[i].p2 != "") {
                var P2 = p2m1 + p2m2;
                if (P2 === 0) {
                  total = total + (Number(weft[i].p2));
                }
                else {
                  if (p2m1 > 0 && p2m2 > 0) {
                    var a = (Number(weft[i].p2) * p2m1);
                    var b = a * p2m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p2) * P2);
                  }
                }

              }
              if (weft[i].p3 != "") {
                var P3 = p3m1 + p3m2;
                if (P3 === 0) {
                  total = total + (Number(weft[i].p3));
                }
                else {
                  if (p3m1 > 0 && p3m2 > 0) {
                    var a = (Number(weft[i].p3) * p3m1);
                    var b = a * p3m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p3) * P3);
                  }
                }

              }
              if (weft[i].p4 != "") {
                var P4 = p4m1 + p4m2;
                if (P4 === 0) {
                  total = total + (Number(weft[i].p4));
                }
                else {
                  if (p4m1 > 0 && p4m2 > 0) {
                    var a = (Number(weft[i].p4) * p4m1);
                    var b = a * p4m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p4) * P4);
                  }
                }

              }
              if (weft[i].p5 != "") {

                var P5 = p5m1 + p5m2;
                if (P5 === 0) {
                  total = total + (Number(weft[i].p5));
                }
                else {
                  if (p5m1 > 0 && p5m2 > 0) {
                    var a = (Number(weft[i].p5) * p5m1);
                    var b = a * p5m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p5) * P5);
                  }
                }

              }
              if (weft[i].p6 != "") {
                var P6 = p6m1 + p6m2;
                if (P6 === 0) {
                  total = total + (Number(weft[i].p6));
                }
                else {
                  if (p6m1 > 0 && p6m2 > 0) {
                    var a = (Number(weft[i].p6) * p6m1);
                    var b = a * p6m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p6) * P6);
                  }
                }

              }
              if (weft[i].p7 != "") {
                var P7 = p7m1 + p7m2;
                if (P7 === 0) {
                  total = total + (Number(weft[i].p7));
                }
                else {
                  if (p7m1 > 0 && p7m2 > 0) {
                    var a = (Number(weft[i].p7) * p7m1);
                    var b = a * p7m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p7) * P7);
                  }
                }

              }
              if (weft[i].p8 != "") {
                var P8 = p8m1 + p8m2;
                if (P8 === 0) {
                  total = total + (Number(weft[i].p8));
                }
                else {
                  if (p8m1 > 0 && p8m2 > 0) {
                    var a = (Number(weft[i].p8) * p8m1);
                    var b = a * p8m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p8) * P8);
                  }
                }
              }
              if (weft[i].p9 != "") {
                var P9 = p9m1 + p9m2;
                if (P9 === 0) {
                  total = total + (Number(weft[i].p9));
                }
                else {
                  if (p9m1 > 0 && p9m2 > 0) {
                    var a = (Number(weft[i].p9) * p9m1);
                    var b = a * p9m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p9) * P9);
                  }
                }
              }
              if (weft[i].p10 != "") {
                var P10 = p10m1 + p10m2;
                if (P10 === 0) {
                  total = total + (Number(weft[i].p10));
                }
                else {
                  if (p10m1 > 0 && p10m2 > 0) {
                    var a = (Number(weft[i].p10) * p10m1);
                    var b = a * p10m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p10) * P10);
                  }
                }
              }
              if (weft[i].p11 != "") {
                var P11 = p11m1 + p11m2;
                if (P11 === 0) {
                  total = total + (Number(weft[i].p11));
                }
                else {
                  if (p11m1 > 0 && p11m2 > 0) {
                    var a = (Number(weft[i].p11) * p11m1);
                    var b = a * p11m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p11) * P11);
                  }
                }
              }
              if (weft[i].p12 != "") {
                var P12 = p12m1 + p12m2;
                if (P12 === 0) {
                  total = total + (Number(weft[i].p12));
                }
                else {
                  if (p12m1 > 0 && p12m2 > 0) {
                    var a = (Number(weft[i].p12) * p12m1);
                    var b = a * p12m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p12) * P12);
                  }
                }
              }
              if (weft[i].p13 != "") {
                var P13 = p13m1 + p13m2;
                if (P13 === 0) {
                  total = total + (Number(weft[i].p13));
                }
                else {
                  if (p13m1 > 0 && p13m2 > 0) {
                    var a = (Number(weft[i].p13) * p13m1);
                    var b = a * p13m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p13) * P13);
                  }
                }
              }
              if (weft[i].p14 != "") {
                var P14 = p14m1 + p14m2;
                if (P14 === 0) {
                  total = total + (Number(weft[i].p14));
                }
                else {
                  if (p14m1 > 0 && p14m2 > 0) {
                    var a = (Number(weft[i].p14) * p14m1);
                    var b = a * p14m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p14) * P14);
                  }
                }
              }
              if (weft[i].p15 != "") {
                var P15 = p15m1 + p15m2;
                if (P15 === 0) {
                  total = total + (Number(weft[i].p15));
                }
                else {
                  if (p15m1 > 0 && p15m2 > 0) {
                    var a = (Number(weft[i].p15) * p15m1);
                    var b = a * p15m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p15) * P15);
                  }
                }
              }
              if (weft[i].p16 != "") {
                var P16 = p16m1 + p16m2;
                if (P16 === 0) {
                  total = total + (Number(weft[i].p16));
                }
                else {
                  if (p16m1 > 0 && p16m2 > 0) {
                    var a = (Number(weft[i].p16) * p16m1);
                    var b = a * p16m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p16) * P16);
                  }
                }
              }
              if (weft[i].p17 != "") {
                var P17 = p17m1 + p17m2;
                if (P17 === 0) {
                  total = total + (Number(weft[i].p17));
                }
                else {
                  if (p17m1 > 0 && p17m2 > 0) {
                    var a = (Number(weft[i].p17) * p17m1);
                    var b = a * p17m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p17) * P17);
                  }
                }
              }
              if (weft[i].p18 != "") {
                var P18 = p18m1 + p18m2;
                if (P18 === 0) {
                  total = total + (Number(weft[i].p18));
                }
                else {
                  if (p18m1 > 0 && p18m2 > 0) {
                    var a = (Number(weft[i].p18) * p18m1);
                    var b = a * p18m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p18) * P18);
                  }
                }
              }
              if (weft[i].p19 != "") {
                var P19 = p19m1 + p19m2;
                if (P19 === 0) {
                  total = total + (Number(weft[i].p19));
                }
                else {
                  if (p19m1 > 0 && p19m2 > 0) {
                    var a = (Number(weft[i].p19) * p19m1);
                    var b = a * p19m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p19) * P19);
                  }
                }
              }
              if (weft[i].p20 != "") {
                var P20 = p20m1 + p20m2;
                if (P20 === 0) {
                  total = total + (Number(weft[i].p20));
                }
                else {
                  if (p20m1 > 0 && p20m2 > 0) {
                    var a = (Number(weft[i].p20) * p20m1);
                    var b = a * p20m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p20) * P20);
                  }
                }
              }
              weft[i].endsPerRepeat = total;
              var res = Number(weft[i].ResultantCout);


              // var KL = this.getView().getModel("oTableDataModel1").getProperty("/aTableData1");
              // var totends = 0;
              // for (var j = 0; j < KL.length; j++) {
              //   totends = totends + Number(KL[j].endsPerRepeat);
              // }
              // if(totends >0){
              //   var wp = (bodend * total)* 0.64;
              //   var wpmtr = (wp / totends)/ res;
              //   var wtpermtr = parseFloat(wpmtr).toFixed(3)
              //   weft[i].WtperMeter = wtpermtr
              // }
              // else{
              //   var wp = (bodend * total)* 0.64;
              //   var wpmtr = wp / res;
              //   var wtpermtr = parseFloat(wpmtr).toFixed(3)
              //   weft[i].WtperMeter = wtpermtr
              // }

            }



            var obj1 = {
              YarnQuality: weft[i].YarnQuality,
              YarnDescrption: weft[i].YarnDescrption,
              ResultantCout: weft[i].ResultantCout,
              endsPerRepeat: weft[i].endsPerRepeat,
              WtperMeter: weft[i].WtperMeter === undefined ? "0" : String(weft[i].WtperMeter),
              RepeatMultiplier: weft[i].RepeatMultiplier,
              p1: weft[i].p1,
              p2: weft[i].p2,
              p3: weft[i].p3,
              p4: weft[i].p4,
              p5: weft[i].p5,
              p6: weft[i].p6,
              p7: weft[i].p7,
              p8: weft[i].p8,
              p9: weft[i].p9,
              p10: weft[i].p10,
              p11: weft[i].p11,
              p12: weft[i].p12,
              p13: weft[i].p13,
              p14: weft[i].p14,
              p15: weft[i].p15,
              p16: weft[i].p16,
              p17: weft[i].p17,
              p18: weft[i].p18,
              p19: weft[i].p19,
              p20: weft[i].p20
            }
            aTableArr1.push(obj1);
            TableModel.setProperty("/aTableData1", aTableArr1)

          }
          var wtpermetertotal = WtP;
          var weft = this.getView().getModel("oTableDataModel1").getProperty("/aTableData1");
          for (var j = 0; j < weft.length; j++) {
            wtpermetertotal = wtpermetertotal + Number(weft[j].WtperMeter);
          }
          wtpermetertotal = parseFloat(wtpermetertotal).toFixed(3);
          var oInput1 = this.getView().byId("IDwarp");
          oInput1.setValue(wtpermetertotal);



          var wefttot = this.getView().byId("IDweftwtmtr").getValue();
          if (wefttot != "") {
            var total = Number(wtpermetertotal) + Number(wefttot);
            total = parseFloat(total).toFixed(3);
            var oInput = this.getView().byId("IDTOtwtmtr");
            oInput.setValue(total);

          }

          var weft = this.getView().getModel("oTableDataModel1").getProperty("/aTableData1");
          var totends = 0;
          for (var j = 0; j < weft.length; j++) {
            totends = totends + Number(weft[j].endsPerRepeat);
          }
          var oInput = this.getView().byId("IDTotends");
          oInput.setValue(totends);

        }
        else {

          var slevedge = this.getView().getModel("oTableDataModel5").getProperty("/aTableData5");
          var WtP = 0;
          slevedge.map(function (items) {
            WtP = WtP + Number(items.WtPerMeter)
          })
          WtP = WtP * 2;
          var weft = this.getView().getModel("oTableDataModel1").getProperty("/aTableData1");
          this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel1");
          this.getView().getModel("oTableDataModel1").setProperty("/aTableData1", []);
          var TableModel = this.getView().getModel("oTableDataModel1");
          var aTableArr1 = TableModel.getProperty("/aTableData1")
          var aTablearr1 = [];

          var bodend = Number(this.getView().byId("bodend").getValue());
          // var EPI = Number(this.getView().byId("EPI").getValue());
          // var reedspace = Number(this.getView().byId("reeds").getValue());
          var p1m1 = 0; var p2m1 = 0; var p3m1 = 0; var p4m1 = 0; var p5m1 = 0; var p6m1 = 0; var p7m1 = 0; var p8m1 = 0; var p9m1 = 0; var p10m1 = 0; var p11m1 = 0; var p12m1 = 0; var p13m1 = 0; var p14m1 = 0; var p15m1 = 0; var p16m1 = 0; var p17m1 = 0; var p18m1 = 0; var p19m1 = 0; var p20m1 = 0;
          var p1m2 = 0; var p2m2 = 0; var p3m2 = 0; var p4m2 = 0; var p5m2 = 0; var p6m2 = 0; var p7m2 = 0; var p8m2 = 0; var p9m2 = 0; var p10m2 = 0; var p11m2 = 0; var p12m2 = 0; var p13m2 = 0; var p14m2 = 0; var p15m2 = 0; var p16m2 = 0; var p17m2 = 0; var p18m2 = 0; var p19m2 = 0; var p20m2 = 0;

          var p1r1 = ""; var p2r1 = ""; var p3r1 = ""; var p4r1 = ""; var p5r1 = ""; var p6r1 = ""; var p7r1 = ""; var p8r1 = ""; var p9r1 = ""; var p10r1 = ""; var p11r1 = ""; var p12r1 = ""; var p13r1 = ""; var p14r1 = ""; var p15r1 = ""; var p16r1 = ""; var p17r1 = ""; var p18r1 = ""; var p19r1 = ""; var p20r1 = "";
          var p1r2 = ""; var p2r2 = ""; var p3r2 = ""; var p4r2 = ""; var p5r2 = ""; var p6r2 = ""; var p7r2 = ""; var p8r2 = ""; var p9r2 = ""; var p10r2 = ""; var p11r2 = ""; var p12r2 = ""; var p13r2 = ""; var p14r2 = ""; var p15r2 = ""; var p16r2 = ""; var p17r2 = ""; var p18r2 = ""; var p19r2 = ""; var p20r2 = "";
          for (var i = 0; i < weft.length; i++) {
            if (weft[i].RepeatMultiplier === "R1") {
              weft[i].WtperMeter = "0";
              weft[i].endsPerRepeat = "0";
              if (weft[i].p1 != "") {
                p1r1 = weft[i].p1;
              }
              if (weft[i].p2 != "") {
                p2r1 = weft[i].p2;
              }
              if (weft[i].p3 != "") {
                p3r1 = weft[i].p3;
              }
              if (weft[i].p4 != "") {
                p4r1 = weft[i].p4;
              }
              if (weft[i].p5 != "") {
                p5r1 = weft[i].p5;
              }
              if (weft[i].p6 != "") {
                p6r1 = weft[i].p6;
              }
              if (weft[i].p7 != "") {
                p7r1 = weft[i].p7;
              }
              if (weft[i].p8 != "") {
                p8r1 = weft[i].p8;
              }
              if (weft[i].p9 != "") {
                p9r1 = weft[i].p9;
              }
              if (weft[i].p10 != "") {
                p10r1 = weft[i].p10;
              }
              if (weft[i].p11 != "") {
                p11r1 = weft[i].p11;
              }
              if (weft[i].p12 != "") {
                p12r1 = weft[i].p12;
              }
              if (weft[i].p13 != "") {
                p13r1 = weft[i].p13;
              }
              if (weft[i].p14 != "") {
                p14r1 = weft[i].p14;
              }
              if (weft[i].p15 != "") {
                p15r1 = weft[i].p15;
              }
              if (weft[i].p16 != "") {
                p16r1 = weft[i].p16;
              }
              if (weft[i].p17 != "") {
                p17r1 = weft[i].p17;
              }
              if (weft[i].p18 != "") {
                p18r1 = weft[i].p18;
              }
              if (weft[i].p19 != "") {
                p19r1 = weft[i].p19;
              }
              if (weft[i].p20 != "") {
                p20r1 = weft[i].p20;
              }
            }
            else if (weft[i].RepeatMultiplier === "R2") {
              weft[i].WtperMeter = "0";
              weft[i].endsPerRepeat = "0";
              if (weft[i].p1 != "") {
                p1r2 = weft[i].p1;
              }
              if (weft[i].p2 != "") {
                p2r2 = weft[i].p2;
              }
              if (weft[i].p3 != "") {
                p3r2 = weft[i].p3;
              }
              if (weft[i].p4 != "") {
                p4r2 = weft[i].p4;
              }
              if (weft[i].p5 != "") {
                p5r2 = weft[i].p5;
              }
              if (weft[i].p6 != "") {
                p6r2 = weft[i].p6;
              }
              if (weft[i].p7 != "") {
                p7r2 = weft[i].p7;
              }
              if (weft[i].p8 != "") {
                p8r2 = weft[i].p8;
              }
              if (weft[i].p9 != "") {
                p9r2 = weft[i].p9;
              }
              if (weft[i].p10 != "") {
                p10r2 = weft[i].p10;
              }
              if (weft[i].p11 != "") {
                p11r2 = weft[i].p11;
              }
              if (weft[i].p12 != "") {
                p12r2 = weft[i].p12;
              }
              if (weft[i].p13 != "") {
                p13r2 = weft[i].p13;
              }
              if (weft[i].p14 != "") {
                p14r2 = weft[i].p14;
              }
              if (weft[i].p15 != "") {
                p15r2 = weft[i].p15;
              }
              if (weft[i].p16 != "") {
                p16r2 = weft[i].p16;
              }
              if (weft[i].p17 != "") {
                p17r2 = weft[i].p17;
              }
              if (weft[i].p18 != "") {
                p18r2 = weft[i].p18;
              }
              if (weft[i].p19 != "") {
                p19r2 = weft[i].p19;
              }
              if (weft[i].p20 != "") {
                p20r2 = weft[i].p20;
              }
            }
            else if (weft[i].RepeatMultiplier === "M1") {
              weft[i].endsPerRepeat = "0";
              weft[i].WtperMeter = "0";




              // for p1
              if (weft[i].p1 != "") {
                p1m1 = Number(weft[i].p1);
              }


              //  for p2
              if (p1r1 === "[" && p2r1 === "") {
                p2m1 = Number(weft[i].p1);
              }
              else if (p1r1 === "[" && p2r1 === "]") {
                p2m1 = Number(weft[i].p1);
              }
              else
                if (weft[i].p2 != "") {

                  p2m1 = Number(weft[i].p2);
                }

              //  for p3
              if (p1r1 === "[" && p2r1 === "" && p3r1 === "") {
                p3m1 = Number(weft[i].p1);
              }
              else
                if (p1r1 === "[" && p2r1 === "" && p3r1 === "]") {
                  p3m1 = Number(weft[i].p1);

                }
                else if (p2r1 === "[" && p3r1 === "") {
                  p3m1 = Number(weft[i].p2);
                }
                else if (p2r1 === "[" && p3r1 === "]") {
                  p3m1 = Number(weft[i].p2);
                }
                else
                  if (weft[i].p3 != "") {
                    p3m1 = Number(weft[i].p3);

                  }

              //  for p4
              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "") {
                p4m1 = Number(weft[i].p1);
              }
              else
                if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "]") {
                  p4m1 = Number(weft[i].p1);
                }
                else if (p2r1 === "[" && p3r1 === "" && p4r1 === "") {
                  p4m1 = Number(weft[i].p2);
                }
                else if (p2r1 === "[" && p3r1 === "" && p4r1 === "]") {
                  p4m1 = Number(weft[i].p2);
                }
                else if (p3r1 === "[" && p4r1 === "]") {
                  p4m1 = Number(weft[i].p3);
                }
                else if (p3r1 === "[" && p4r1 === "") {
                  p4m1 = Number(weft[i].p3);
                }
                else if (weft[i].p4 != "") {
                  p4m1 = Number(weft[i].p4);
                }




              // for p5
              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "") {
                p5m1 = Number(weft[i].p1);
              }
              else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "]") {
                p5m1 = Number(weft[i].p1);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "]") {
                p5m1 = Number(weft[i].p2);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "") {
                p5m1 = Number(weft[i].p2);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "") {
                p5m1 = Number(weft[i].p3);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "]") {
                p5m1 = Number(weft[i].p3);
              }
              else if (p4r1 === "[" && p5r1 === "") {
                p5m1 = Number(weft[i].p4);
              }
              else if (p4r1 === "[" && p5r1 === "]") {
                p5m1 = Number(weft[i].p4);
              }
              else if (weft[i].p5 != "") {
                p5m1 = Number(weft[i].p5);
              }

              // for p6
              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "") {
                p6m1 = Number(weft[i].p1);
              }
              else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "]") {
                p6m1 = Number(weft[i].p1);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "") {
                p6m1 = Number(weft[i].p2);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "]") {
                p6m1 = Number(weft[i].p2);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "") {
                p6m1 = Number(weft[i].p3);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "]") {
                p6m1 = Number(weft[i].p3);
              }
              else if (p4r1 === "[" && p5r1 === "" && p6r1 === "") {
                p6m1 = Number(weft[i].p4);
              }
              else if (p4r1 === "[" && p5r1 === "" && p6r1 === "]") {
                p6m1 = Number(weft[i].p4);
              }
              else if (p5r1 === "[" && p6r1 === "") {
                p6m1 = Number(weft[i].p5);
              }
              else if (p5r1 === "[" && p6r1 === "]") {
                p6m1 = Number(weft[i].p5);
              }
              else if (weft[i].p6 != "") {
                p6m1 = Number(weft[i].p6);
              }

              // for p7

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "") {
                p7m1 = Number(weft[i].p1);
              }
              else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "]") {
                p7m1 = Number(weft[i].p1);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "") {
                p7m1 = Number(weft[i].p2);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "]") {
                p7m1 = Number(weft[i].p2);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "") {
                p7m1 = Number(weft[i].p3);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "]") {
                p7m1 = Number(weft[i].p3);
              }
              else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "") {
                p7m1 = Number(weft[i].p4);
              }
              else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "]") {
                p7m1 = Number(weft[i].p4);
              }
              else if (p5r1 === "[" && p6r1 === "" && p7r1 === "") {
                p7m1 = Number(weft[i].p5);
              }
              else if (p5r1 === "[" && p6r1 === "" && p7r1 === "]") {
                p7m1 = Number(weft[i].p5);
              }
              else if (p6r1 === "[" && p7r1 === "") {
                p7m1 = Number(weft[i].p6);
              }
              else if (p6r1 === "[" && p7r1 === "]") {
                p7m1 = Number(weft[i].p6);
              }
              else if (weft[i].p7 != "") {
                p7m1 = Number(weft[i].p7);
              }








              // for p8
              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "") {
                p8m1 = Number(weft[i].p1);
              }
              else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "]") {
                p8m1 = Number(weft[i].p1);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "") {
                p8m1 = Number(weft[i].p2);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "]") {
                p8m1 = Number(weft[i].p2);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "") {
                p8m1 = Number(weft[i].p3);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "]") {
                p8m1 = Number(weft[i].p3);
              }
              else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "") {
                p8m1 = Number(weft[i].p4);
              }
              else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "]") {
                p8m1 = Number(weft[i].p4);
              }
              else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "") {
                p8m1 = Number(weft[i].p5);
              }
              else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "]") {
                p8m1 = Number(weft[i].p5);
              }
              else if (p6r1 === "[" && p7r1 === "" && p8r1 === "") {
                p8m1 = Number(weft[i].p6);
              }
              else if (p6r1 === "[" && p7r1 === "" && p8r1 === "]") {
                p8m1 = Number(weft[i].p6);
              }
              else if (p7r1 === "[" && p8r1 === "") {
                p8m1 = Number(weft[i].p7);
              }
              else if (p7r1 === "[" && p8r1 === "]") {
                p8m1 = Number(weft[i].p7);
              }
              else if (weft[i].p8 != "") {
                p8m1 = Number(weft[i].p8);
              }







              // for p9
              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
                p9m1 = Number(weft[i].p1);
              }
              else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
                p9m1 = Number(weft[i].p1);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
                p9m1 = Number(weft[i].p2);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
                p9m1 = Number(weft[i].p2);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
                p9m1 = Number(weft[i].p3);
              }
              else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
                p9m1 = Number(weft[i].p3);
              }
              else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
                p9m1 = Number(weft[i].p4);
              }
              else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
                p9m1 = Number(weft[i].p4);
              }
              else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
                p9m1 = Number(weft[i].p5);
              }
              else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
                p9m1 = Number(weft[i].p5);
              }
              else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
                p9m1 = Number(weft[i].p6);
              }
              else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
                p9m1 = Number(weft[i].p6);
              }
              else if (p7r1 === "[" && p8r1 === "" && p9r1 === "") {
                p9m1 = Number(weft[i].p7);
              }
              else if (p7r1 === "[" && p8r1 === "" && p9r1 === "]") {
                p9m1 = Number(weft[i].p7);
              }
              else if (p8r1 === "[" && p9r1 === "") {
                p9m1 = Number(weft[i].p8);
              }
              else if (p8r1 === "[" && p9r1 === "]") {
                p9m1 = Number(weft[i].p8);
              }
              else if (weft[i].p9 != "") {
                p9m1 = Number(weft[i].p9);
              }


              // for p10

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
                p10m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
                p10m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
                p10m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
                p10m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
                p10m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
                p10m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
                p10m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
                p10m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
                p10m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
                p10m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
                p10m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
                p10m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
                p10m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
                p10m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "") {
                p10m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "]") {
                p10m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "") {
                p10m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "]") {
                p10m1 = Number(weft[i].p9);
              } else if (weft[i].p10 !== "") {
                p10m1 = Number(weft[i].p10);
              }

              // for p11

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "") {
                p11m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "]") {
                p11m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "") {
                p11m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "]") {
                p11m1 = Number(weft[i].p10);
              }
              else if (weft[i].p11 !== "") {
                p11m1 = Number(weft[i].p11);
              }

              // for p12

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "") {
                p12m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "]") {
                p12m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "") {
                p12m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "]") {
                p12m1 = Number(weft[i].p11);
              } else if (weft[i].p12 !== "") {
                p12m1 = Number(weft[i].p12);
              }

              // for p13

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "") {
                p13m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "]") {
                p13m1 = Number(weft[i].p11);
              } else if (p12r1 === "[" && p13r1 === "") {
                p13m1 = Number(weft[i].p12);
              } else if (p12r1 === "[" && p13r1 === "]") {
                p13m1 = Number(weft[i].p12);
              } else if (weft[i].p13 !== "") {
                p13m1 = Number(weft[i].p13);
              }


              // for p14


              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p11);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "") {
                p14m1 = Number(weft[i].p12);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "]") {
                p14m1 = Number(weft[i].p12);
              } else if (p13r1 === "[" && p14r1 === "") {
                p14m1 = Number(weft[i].p13);
              } else if (p13r1 === "[" && p14r1 === "]") {
                p14m1 = Number(weft[i].p13);
              } else if (weft[i].p14 !== "") {
                p14m1 = Number(weft[i].p14);
              }


              // for p15

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p11);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p12);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p12);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "") {
                p15m1 = Number(weft[i].p13);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "]") {
                p15m1 = Number(weft[i].p13);
              } else if (p14r1 === "[" && p15r1 === "") {
                p15m1 = Number(weft[i].p14);
              } else if (p14r1 === "[" && p15r1 === "]") {
                p15m1 = Number(weft[i].p14);
              } else if (weft[i].p15 !== "") {
                p15m1 = Number(weft[i].p15);
              }

              // for p16

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p11);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p12);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p12);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p13);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p13);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "") {
                p16m1 = Number(weft[i].p14);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "]") {
                p16m1 = Number(weft[i].p14);
              } else if (p15r1 === "[" && p16r1 === "") {
                p16m1 = Number(weft[i].p15);
              } else if (p15r1 === "[" && p16r1 === "]") {
                p16m1 = Number(weft[i].p15);
              } else if (weft[i].p16 !== "") {
                p16m1 = Number(weft[i].p16);
              }


              // for p17

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p11);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p12);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p12);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p13);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p13);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p14);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p14);
              } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "") {
                p17m1 = Number(weft[i].p15);
              } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "]") {
                p17m1 = Number(weft[i].p15);
              } else if (p16r1 === "[" && p17r1 === "") {
                p17m1 = Number(weft[i].p16);
              } else if (p16r1 === "[" && p17r1 === "]") {
                p17m1 = Number(weft[i].p16);
              } else if (weft[i].p17 !== "") {
                p17m1 = Number(weft[i].p17);
              }



              // for p18

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p11);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p12);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p12);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p13);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p13);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p14);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p14);
              } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p15);
              } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p15);
              } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "") {
                p18m1 = Number(weft[i].p16);
              } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "]") {
                p18m1 = Number(weft[i].p16);
              } else if (p17r1 === "[" && p18r1 === "") {
                p18m1 = Number(weft[i].p17);
              } else if (p17r1 === "[" && p18r1 === "]") {
                p18m1 = Number(weft[i].p17);
              } else if (weft[i].p18 !== "") {
                p18m1 = Number(weft[i].p18);
              }


              // for p19


              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p11);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p12);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p12);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p13);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p13);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p14);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p14);
              } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p15);
              } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p15);
              } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p16);
              } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p16);
              } else if (p17r1 === "[" && p18r1 === "" && p19r1 === "") {
                p19m1 = Number(weft[i].p17);
              } else if (p17r1 === "[" && p18r1 === "" && p19r1 === "]") {
                p19m1 = Number(weft[i].p17);
              } else if (p18r1 === "[" && p19r1 === "") {
                p19m1 = Number(weft[i].p18);
              } else if (p18r1 === "[" && p19r1 === "]") {
                p19m1 = Number(weft[i].p18);
              } else if (weft[i].p19 !== "") {
                p19m1 = Number(weft[i].p19);
              }


              // for p20

              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p1);
              } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p1);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p2);
              } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p2);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p3);
              } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p3);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p4);
              } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p4);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p5);
              } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p5);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p6);
              } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p6);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p7);
              } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p7);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p8);
              } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p8);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p9);
              } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p9);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p10);
              } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p10);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p11);
              } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p11);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p12);
              } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p12);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p13);
              } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p13);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p14);
              } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p14);
              } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p15);
              } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p15);
              } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p16);
              } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p16);
              } else if (p17r1 === "[" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p17);
              } else if (p17r1 === "[" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p17);
              } else if (p18r1 === "[" && p19r1 === "" && p20r1 === "") {
                p20m1 = Number(weft[i].p18);
              } else if (p18r1 === "[" && p19r1 === "" && p20r1 === "]") {
                p20m1 = Number(weft[i].p18);
              } else if (p19r1 === "[" && p20r1 === "") {
                p20m1 = Number(weft[i].p19);
              } else if (p19r1 === "[" && p20r1 === "]") {
                p20m1 = Number(weft[i].p19);
              } else if (weft[i].p20 !== "") {
                p20m1 = Number(weft[i].p20);
              }

            }
            else if (weft[i].RepeatMultiplier === "M2") {
              weft[i].endsPerRepeat = "0";
              weft[i].WtperMeter = "0";

              // for p1
              if (weft[i].p1 != "") {
                p1m2 = Number(weft[i].p1);
              }


              //  for p2
              if (p1r2 === "[" && p2r2 === "") {
                p2m2 = Number(weft[i].p1);
              }
              else if (p1r2 === "[" && p2r2 === "]") {
                p2m2 = Number(weft[i].p1);
              }
              else
                if (weft[i].p2 != "") {

                  p2m2 = Number(weft[i].p2);
                }



              //  for p3
              if (p1r2 === "[" && p2r2 === "" && p3r2 === "") {
                p3m2 = Number(weft[i].p1);
              }
              else
                if (p1r2 === "[" && p2r2 === "" && p3r2 === "]") {
                  p3m2 = Number(weft[i].p1);

                }
                else if (p2r2 === "[" && p3r2 === "") {
                  p3m2 = Number(weft[i].p2);
                }
                else if (p2r2 === "[" && p3r2 === "]") {
                  p3m2 = Number(weft[i].p2);
                }
                else
                  if (weft[i].p3 != "") {
                    p3m2 = Number(weft[i].p3);

                  }

              //  for p4
              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "") {
                p4m2 = Number(weft[i].p1);
              }
              else
                if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "]") {
                  p4m2 = Number(weft[i].p1);
                }
                else if (p2r2 === "[" && p3r2 === "" && p4r2 === "") {
                  p4m2 = Number(weft[i].p2);
                }
                else if (p2r2 === "[" && p3r2 === "" && p4r2 === "]") {
                  p4m2 = Number(weft[i].p2);
                }
                else if (p3r2 === "[" && p4r2 === "]") {
                  p4m2 = Number(weft[i].p3);
                }
                else if (p3r2 === "[" && p4r2 === "") {
                  p4m2 = Number(weft[i].p3);
                }
                else if (weft[i].p4 != "") {
                  p4m2 = Number(weft[i].p4);
                }




              // for p5
              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "") {
                p5m2 = Number(weft[i].p1);
              }
              else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "]") {
                p5m2 = Number(weft[i].p1);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "]") {
                p5m2 = Number(weft[i].p2);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "") {
                p5m2 = Number(weft[i].p2);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "") {
                p5m2 = Number(weft[i].p3);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "]") {
                p5m2 = Number(weft[i].p3);
              }
              else if (p4r2 === "[" && p5r2 === "") {
                p5m2 = Number(weft[i].p4);
              }
              else if (p4r2 === "[" && p52 === "]") {
                p5m2 = Number(weft[i].p4);
              }
              else if (weft[i].p5 != "") {
                p5m2 = Number(weft[i].p5);
              }

              // for p6
              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "") {
                p6m2 = Number(weft[i].p1);
              }
              else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "]") {
                p6m2 = Number(weft[i].p1);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "") {
                p6m2 = Number(weft[i].p2);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "]") {
                p6m2 = Number(weft[i].p2);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "") {
                p6m2 = Number(weft[i].p3);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "]") {
                p6m2 = Number(weft[i].p3);
              }
              else if (p4r2 === "[" && p5r2 === "" && p6r2 === "") {
                p6m2 = Number(weft[i].p4);
              }
              else if (p4r2 === "[" && p5r2 === "" && p6r2 === "]") {
                p6m2 = Number(weft[i].p4);
              }
              else if (p5r2 === "[" && p6r2 === "") {
                p6m2 = Number(weft[i].p5);
              }
              else if (p5r2 === "[" && p6r2 === "]") {
                p6m2 = Number(weft[i].p5);
              }
              else if (weft[i].p6 != "") {
                p6m2 = Number(weft[i].p6);
              }

              // for p7

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "") {
                p7m2 = Number(weft[i].p1);
              }
              else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "]") {
                p7m2 = Number(weft[i].p1);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "") {
                p7m2 = Number(weft[i].p2);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "]") {
                p7m2 = Number(weft[i].p2);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "") {
                p7m2 = Number(weft[i].p3);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "]") {
                p7m2 = Number(weft[i].p3);
              }
              else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "") {
                p7m2 = Number(weft[i].p4);
              }
              else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "]") {
                p7m2 = Number(weft[i].p4);
              }
              else if (p5r2 === "[" && p6r2 === "" && p7r2 === "") {
                p7m2 = Number(weft[i].p5);
              }
              else if (p5r2 === "[" && p6r2 === "" && p7r2 === "]") {
                p7m2 = Number(weft[i].p5);
              }
              else if (p6r2 === "[" && p7r2 === "") {
                p7m2 = Number(weft[i].p6);
              }
              else if (p6r2 === "[" && p7r2 === "]") {
                p7m2 = Number(weft[i].p6);
              }
              else if (weft[i].p7 != "") {
                p7m2 = Number(weft[i].p7);
              }

              // for p8
              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "") {
                p8m2 = Number(weft[i].p1);
              }
              else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "]") {
                p8m2 = Number(weft[i].p1);
              }
              else if (p2r1 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "") {
                p8m2 = Number(weft[i].p2);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "]") {
                p8m2 = Number(weft[i].p2);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "") {
                p8m2 = Number(weft[i].p3);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "]") {
                p8m2 = Number(weft[i].p3);
              }
              else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "") {
                p8m2 = Number(weft[i].p4);
              }
              else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "]") {
                p8m2 = Number(weft[i].p4);
              }
              else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "") {
                p8m2 = Number(weft[i].p5);
              }
              else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "]") {
                p8m2 = Number(weft[i].p5);
              }
              else if (p6r2 === "[" && p7r2 === "" && p8r2 === "") {
                p8m2 = Number(weft[i].p6);
              }
              else if (p6r2 === "[" && p7r2 === "" && p8r2 === "]") {
                p8m2 = Number(weft[i].p6);
              }
              else if (p7r2 === "[" && p8r2 === "") {
                p8m2 = Number(weft[i].p7);
              }
              else if (p7r2 === "[" && p8r2 === "]") {
                p8m2 = Number(weft[i].p7);
              }
              else if (weft[i].p8 != "") {
                p8m2 = Number(weft[i].p8);
              }

              // for p9
              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
                p9m2 = Number(weft[i].p1);
              }
              else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
                p9m2 = Number(weft[i].p1);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
                p9m2 = Number(weft[i].p2);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
                p9m2 = Number(weft[i].p2);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
                p9m2 = Number(weft[i].p3);
              }
              else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
                p9m2 = Number(weft[i].p3);
              }
              else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
                p9m2 = Number(weft[i].p4);
              }
              else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
                p9m2 = Number(weft[i].p4);
              }
              else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
                p9m2 = Number(weft[i].p5);
              }
              else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
                p9m2 = Number(weft[i].p5);
              }
              else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
                p9m2 = Number(weft[i].p6);
              }
              else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
                p9m2 = Number(weft[i].p6);
              }
              else if (p7r2 === "[" && p8r2 === "" && p9r2 === "") {
                p9m2 = Number(weft[i].p7);
              }
              else if (p7r2 === "[" && p8r2 === "" && p9r2 === "]") {
                p9m2 = Number(weft[i].p7);
              }
              else if (p8r2 === "[" && p9r2 === "") {
                p9m2 = Number(weft[i].p8);
              }
              else if (p8r2 === "[" && p9r2 === "]") {
                p9m2 = Number(weft[i].p8);
              }
              else if (weft[i].p9 != "") {
                p9m2 = Number(weft[i].p9);
              }



              // for p10

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
                p10m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
                p10m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
                p10m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
                p10m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
                p10m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
                p10m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
                p10m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
                p10m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
                p10m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
                p10m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
                p10m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
                p10m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
                p10m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
                p10m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "") {
                p10m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "]") {
                p10m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "") {
                p10m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "]") {
                p10m2 = Number(weft[i].p9);
              } else if (weft[i].p10 !== "") {
                p10m2 = Number(weft[i].p10);
              }

              // for p11

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "") {
                p11m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "]") {
                p11m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "") {
                p11m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "]") {
                p11m2 = Number(weft[i].p10);
              }
              else if (weft[i].p11 !== "") {
                p11m2 = Number(weft[i].p11);
              }

              // for p12

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "") {
                p12m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "]") {
                p12m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "") {
                p12m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "]") {
                p12m2 = Number(weft[i].p11);
              } else if (weft[i].p12 !== "") {
                p12m2 = Number(weft[i].p12);
              }

              // for p13

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "") {
                p13m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "]") {
                p13m2 = Number(weft[i].p11);
              } else if (p12r2 === "[" && p13r2 === "") {
                p13m2 = Number(weft[i].p12);
              } else if (p12r2 === "[" && p13r2 === "]") {
                p13m2 = Number(weft[i].p12);
              } else if (weft[i].p13 !== "") {
                p13m2 = Number(weft[i].p13);
              }


              // for p14


              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p11);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "") {
                p14m2 = Number(weft[i].p12);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "]") {
                p14m2 = Number(weft[i].p12);
              } else if (p13r2 === "[" && p14r2 === "") {
                p14m2 = Number(weft[i].p13);
              } else if (p13r2 === "[" && p14r2 === "]") {
                p14m2 = Number(weft[i].p13);
              } else if (weft[i].p14 !== "") {
                p14m2 = Number(weft[i].p14);
              }


              // for p15

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p11);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p12);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p12);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "") {
                p15m2 = Number(weft[i].p13);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "]") {
                p15m2 = Number(weft[i].p13);
              } else if (p14r2 === "[" && p15r2 === "") {
                p15m2 = Number(weft[i].p14);
              } else if (p14r2 === "[" && p15r2 === "]") {
                p15m2 = Number(weft[i].p14);
              } else if (weft[i].p15 !== "") {
                p15m2 = Number(weft[i].p15);
              }

              // for p16

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p11);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p12);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p12);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p13);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p13);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "") {
                p16m2 = Number(weft[i].p14);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "]") {
                p16m2 = Number(weft[i].p14);
              } else if (p15r2 === "[" && p16r2 === "") {
                p16m2 = Number(weft[i].p15);
              } else if (p15r2 === "[" && p16r2 === "]") {
                p16m2 = Number(weft[i].p15);
              } else if (weft[i].p16 !== "") {
                p16m2 = Number(weft[i].p16);
              }


              // for p17

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p11);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p12);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p12);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p13);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p13);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p14);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p14);
              } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "") {
                p17m2 = Number(weft[i].p15);
              } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "]") {
                p17m2 = Number(weft[i].p15);
              } else if (p16r2 === "[" && p17r2 === "") {
                p17m2 = Number(weft[i].p16);
              } else if (p16r2 === "[" && p17r2 === "]") {
                p17m2 = Number(weft[i].p16);
              } else if (weft[i].p17 !== "") {
                p17m2 = Number(weft[i].p17);
              }



              // for p18

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p11);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p12);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p12);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p13);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p13);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p14);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p14);
              } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p15);
              } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p15);
              } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "") {
                p18m2 = Number(weft[i].p16);
              } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "]") {
                p18m2 = Number(weft[i].p16);
              } else if (p17r2 === "[" && p18r2 === "") {
                p18m2 = Number(weft[i].p17);
              } else if (p17r2 === "[" && p18r2 === "]") {
                p18m2 = Number(weft[i].p17);
              } else if (weft[i].p18 !== "") {
                p18m2 = Number(weft[i].p18);
              }


              // for p19


              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p11);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p12);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p12);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p13);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p13);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p14);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p14);
              } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p15);
              } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p15);
              } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p16);
              } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p16);
              } else if (p17r2 === "[" && p18r2 === "" && p19r2 === "") {
                p19m2 = Number(weft[i].p17);
              } else if (p17r2 === "[" && p18r2 === "" && p19r2 === "]") {
                p19m2 = Number(weft[i].p17);
              } else if (p18r2 === "[" && p19r2 === "") {
                p19m2 = Number(weft[i].p18);
              } else if (p18r2 === "[" && p19r2 === "]") {
                p19m2 = Number(weft[i].p18);
              } else if (weft[i].p19 !== "") {
                p19m2 = Number(weft[i].p19);
              }


              // for p20

              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p1);
              } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p1);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p2);
              } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p2);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p3);
              } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p3);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p4);
              } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p4);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p5);
              } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p5);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p6);
              } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p6);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p7);
              } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p7);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p8);
              } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p8);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p9);
              } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p9);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p10);
              } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p10);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p11);
              } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p11);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p12);
              } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p12);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p13);
              } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p13);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p14);
              } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p14);
              } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p15);
              } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p15);
              } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p16);
              } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p16);
              } else if (p17r2 === "[" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p17);
              } else if (p17r2 === "[" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p17);
              } else if (p18r2 === "[" && p19r2 === "" && p20r2 === "") {
                p20m2 = Number(weft[i].p18);
              } else if (p18r2 === "[" && p19r2 === "" && p20r2 === "]") {
                p20m2 = Number(weft[i].p18);
              } else if (p19r2 === "[" && p20r2 === "") {
                p20m2 = Number(weft[i].p19);
              } else if (p19r2 === "[" && p20r2 === "]") {
                p20m2 = Number(weft[i].p19);
              } else if (weft[i].p20 !== "") {
                p20m2 = Number(weft[i].p20);
              }
            }
            else if (weft[i].RepeatMultiplier != "R1" && weft[i].RepeatMultiplier != "M1" && weft[i].RepeatMultiplier != "R2" && weft[i].RepeatMultiplier != "M2") {


              var total = 0;
              if (weft[i].p1 != "") {
                var P1 = p1m1 + p1m2;
                if (P1 === 0) {
                  total = total + (Number(weft[i].p1));
                }
                else {

                  if (p1m1 > 0 && p1m2 > 0) {
                    var a = (Number(weft[i].p1) * p1m1);
                    var b = a * p1m2;

                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p1) * P1);
                  }

                }

              }
              if (weft[i].p2 != "") {
                var P2 = p2m1 + p2m2;
                if (P2 === 0) {
                  total = total + (Number(weft[i].p2));
                }
                else {
                  if (p2m1 > 0 && p2m2 > 0) {
                    var a = (Number(weft[i].p2) * p2m1);
                    var b = a * p2m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p2) * P2);
                  }
                }

              }
              if (weft[i].p3 != "") {
                var P3 = p3m1 + p3m2;
                if (P3 === 0) {
                  total = total + (Number(weft[i].p3));
                }
                else {
                  if (p3m1 > 0 && p3m2 > 0) {
                    var a = (Number(weft[i].p3) * p3m1);
                    var b = a * p3m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p3) * P3);
                  }
                }

              }
              if (weft[i].p4 != "") {
                var P4 = p4m1 + p4m2;
                if (P4 === 0) {
                  total = total + (Number(weft[i].p4));
                }
                else {
                  if (p4m1 > 0 && p4m2 > 0) {
                    var a = (Number(weft[i].p4) * p4m1);
                    var b = a * p4m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p4) * P4);
                  }
                }

              }
              if (weft[i].p5 != "") {

                var P5 = p5m1 + p5m2;
                if (P5 === 0) {
                  total = total + (Number(weft[i].p5));
                }
                else {
                  if (p5m1 > 0 && p5m2 > 0) {
                    var a = (Number(weft[i].p5) * p5m1);
                    var b = a * p5m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p5) * P5);
                  }
                }

              }
              if (weft[i].p6 != "") {
                var P6 = p6m1 + p6m2;
                if (P6 === 0) {
                  total = total + (Number(weft[i].p6));
                }
                else {
                  if (p6m1 > 0 && p6m2 > 0) {
                    var a = (Number(weft[i].p6) * p6m1);
                    var b = a * p6m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p6) * P6);
                  }
                }

              }
              if (weft[i].p7 != "") {
                var P7 = p7m1 + p7m2;
                if (P7 === 0) {
                  total = total + (Number(weft[i].p7));
                }
                else {
                  if (p7m1 > 0 && p7m2 > 0) {
                    var a = (Number(weft[i].p7) * p7m1);
                    var b = a * p7m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p7) * P7);
                  }
                }

              }
              if (weft[i].p8 != "") {
                var P8 = p8m1 + p8m2;
                if (P8 === 0) {
                  total = total + (Number(weft[i].p8));
                }
                else {
                  if (p8m1 > 0 && p8m2 > 0) {
                    var a = (Number(weft[i].p8) * p8m1);
                    var b = a * p8m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p8) * P8);
                  }
                }
              }
              if (weft[i].p9 != "") {
                var P9 = p9m1 + p9m2;
                if (P9 === 0) {
                  total = total + (Number(weft[i].p9));
                }
                else {
                  if (p9m1 > 0 && p9m2 > 0) {
                    var a = (Number(weft[i].p9) * p9m1);
                    var b = a * p9m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p9) * P9);
                  }
                }
              }
              if (weft[i].p10 != "") {
                var P10 = p10m1 + p10m2;
                if (P10 === 0) {
                  total = total + (Number(weft[i].p10));
                }
                else {
                  if (p10m1 > 0 && p10m2 > 0) {
                    var a = (Number(weft[i].p10) * p10m1);
                    var b = a * p10m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p10) * P10);
                  }
                }
              }
              if (weft[i].p11 != "") {
                var P11 = p11m1 + p11m2;
                if (P11 === 0) {
                  total = total + (Number(weft[i].p11));
                }
                else {
                  if (p11m1 > 0 && p11m2 > 0) {
                    var a = (Number(weft[i].p11) * p11m1);
                    var b = a * p11m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p11) * P11);
                  }
                }
              }
              if (weft[i].p12 != "") {
                var P12 = p12m1 + p12m2;
                if (P12 === 0) {
                  total = total + (Number(weft[i].p12));
                }
                else {
                  if (p12m1 > 0 && p12m2 > 0) {
                    var a = (Number(weft[i].p12) * p12m1);
                    var b = a * p12m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p12) * P12);
                  }
                }
              }
              if (weft[i].p13 != "") {
                var P13 = p13m1 + p13m2;
                if (P13 === 0) {
                  total = total + (Number(weft[i].p13));
                }
                else {
                  if (p13m1 > 0 && p13m2 > 0) {
                    var a = (Number(weft[i].p13) * p13m1);
                    var b = a * p13m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p13) * P13);
                  }
                }
              }
              if (weft[i].p14 != "") {
                var P14 = p14m1 + p14m2;
                if (P14 === 0) {
                  total = total + (Number(weft[i].p14));
                }
                else {
                  if (p14m1 > 0 && p14m2 > 0) {
                    var a = (Number(weft[i].p14) * p14m1);
                    var b = a * p14m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p14) * P14);
                  }
                }
              }
              if (weft[i].p15 != "") {
                var P15 = p15m1 + p15m2;
                if (P15 === 0) {
                  total = total + (Number(weft[i].p15));
                }
                else {
                  if (p15m1 > 0 && p15m2 > 0) {
                    var a = (Number(weft[i].p15) * p15m1);
                    var b = a * p15m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p15) * P15);
                  }
                }
              }
              if (weft[i].p16 != "") {
                var P16 = p16m1 + p16m2;
                if (P16 === 0) {
                  total = total + (Number(weft[i].p16));
                }
                else {
                  if (p16m1 > 0 && p16m2 > 0) {
                    var a = (Number(weft[i].p16) * p16m1);
                    var b = a * p16m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p16) * P16);
                  }
                }
              }
              if (weft[i].p17 != "") {
                var P17 = p17m1 + p17m2;
                if (P17 === 0) {
                  total = total + (Number(weft[i].p17));
                }
                else {
                  if (p17m1 > 0 && p17m2 > 0) {
                    var a = (Number(weft[i].p17) * p17m1);
                    var b = a * p17m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p17) * P17);
                  }
                }
              }
              if (weft[i].p18 != "") {
                var P18 = p18m1 + p18m2;
                if (P18 === 0) {
                  total = total + (Number(weft[i].p18));
                }
                else {
                  if (p18m1 > 0 && p18m2 > 0) {
                    var a = (Number(weft[i].p18) * p18m1);
                    var b = a * p18m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p18) * P18);
                  }
                }
              }
              if (weft[i].p19 != "") {
                var P19 = p19m1 + p19m2;
                if (P19 === 0) {
                  total = total + (Number(weft[i].p19));
                }
                else {
                  if (p19m1 > 0 && p19m2 > 0) {
                    var a = (Number(weft[i].p19) * p19m1);
                    var b = a * p19m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p19) * P19);
                  }
                }
              }
              if (weft[i].p20 != "") {
                var P20 = p20m1 + p20m2;
                if (P20 === 0) {
                  total = total + (Number(weft[i].p20));
                }
                else {
                  if (p20m1 > 0 && p20m2 > 0) {
                    var a = (Number(weft[i].p20) * p20m1);
                    var b = a * p20m2;
                    total = total + b;
                  }
                  else {
                    total = total + (Number(weft[i].p20) * P20);
                  }
                }
              }
              weft[i].endsPerRepeat = total;
              // var res = Number(weft[i].ResultantCout);

              // var KL = this.getView().getModel("oTableDataModel1").getProperty("/aTableData1");
              // var totends = 0;
              // for (var j = 0; j < KL.length; j++) {
              //   totends = totends + Number(KL[j].endsPerRepeat);
              // }
              // if(totends >0){
              //   var wp = (bodend * total)* 0.64;
              //   var wpmtr = (wp / totends)/ res;
              //   var wtpermtr = parseFloat(wpmtr).toFixed(3)
              //   weft[i].WtperMeter = wtpermtr
              // }
              // else{
              //   var wp = (bodend * total)* 0.64;
              //   var wpmtr = wp / res;
              //   var wtpermtr = parseFloat(wpmtr).toFixed(3)
              //   weft[i].WtperMeter = wtpermtr
              // }

            }



            var obj1 = {
              YarnQuality: weft[i].YarnQuality,
              YarnDescrption: weft[i].YarnDescrption,
              ResultantCout: weft[i].ResultantCout,
              endsPerRepeat: weft[i].endsPerRepeat,
              WtperMeter: weft[i].WtperMeter === undefined ? "0" : String(weft[i].WtperMeter),
              RepeatMultiplier: weft[i].RepeatMultiplier,
              p1: weft[i].p1,
              p2: weft[i].p2,
              p3: weft[i].p3,
              p4: weft[i].p4,
              p5: weft[i].p5,
              p6: weft[i].p6,
              p7: weft[i].p7,
              p8: weft[i].p8,
              p9: weft[i].p9,
              p10: weft[i].p10,
              p11: weft[i].p11,
              p12: weft[i].p12,
              p13: weft[i].p13,
              p14: weft[i].p14,
              p15: weft[i].p15,
              p16: weft[i].p16,
              p17: weft[i].p17,
              p18: weft[i].p18,
              p19: weft[i].p19,
              p20: weft[i].p20
            }
            aTableArr1.push(obj1);
            TableModel.setProperty("/aTableData1", aTableArr1)

          }
          var wtpermetertotal = WtP;
          var weft = this.getView().getModel("oTableDataModel1").getProperty("/aTableData1");
          for (var j = 0; j < weft.length; j++) {
            wtpermetertotal = wtpermetertotal + Number(weft[j].WtperMeter);
          }
          wtpermetertotal = parseFloat(wtpermetertotal).toFixed(3);
          var oInput1 = this.getView().byId("IDwarp");
          oInput1.setValue(wtpermetertotal);
          var wefttot = this.getView().byId("IDweftwtmtr").getValue();
          if (wefttot != "") {
            var total = Number(wtpermetertotal) + Number(wefttot);
            total = parseFloat(total).toFixed(3);
            var oInput = this.getView().byId("IDTOtwtmtr");
            oInput.setValue(total);

          }

          var weft = this.getView().getModel("oTableDataModel1").getProperty("/aTableData1");
          var totends = 0;
          for (var j = 0; j < weft.length; j++) {
            totends = totends + Number(weft[j].endsPerRepeat);
          }
          var oInput = this.getView().byId("IDTotends");
          oInput.setValue(totends);
        }
        this.onformulaawarpp();
      },
      onformulaawarpp: function () {
        var bodend = Number(this.getView().byId("bodend").getValue());
        var totalendsperrep = Number(this.getView().byId("IDTotends").getValue());
        var weft = this.getView().getModel("oTableDataModel1").getProperty("/aTableData1");
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel1");
        this.getView().getModel("oTableDataModel1").setProperty("/aTableData1", []);
        var TableModel = this.getView().getModel("oTableDataModel1");
        var aTableArr1 = TableModel.getProperty("/aTableData1")
        for (var i = 0; i < weft.length; i++) {
          if (weft[i].RepeatMultiplier === "R1" && weft[i].RepeatMultiplier === "M1" && weft[i].RepeatMultiplier === "R2" && weft[i].RepeatMultiplier === "M2") {
          }
          else if (weft[i].RepeatMultiplier != "R1" && weft[i].RepeatMultiplier != "M1" && weft[i].RepeatMultiplier != "R2" && weft[i].RepeatMultiplier != "M2") {

            var total = Number(weft[i].endsPerRepeat);
            var res = Number(weft[i].ResultantCout);
            var a = bodend * total;
            var b = a / totalendsperrep;
            var wp = b * 0.64;
            var wpmtr = wp / res;
            var wtpermtr = parseFloat(wpmtr).toFixed(3);
            weft[i].WtperMeter = wtpermtr


          }
          var obj1 = {
            YarnQuality: weft[i].YarnQuality,
            YarnDescrption: weft[i].YarnDescrption,
            ResultantCout: weft[i].ResultantCout,
            endsPerRepeat: weft[i].endsPerRepeat,
            WtperMeter: weft[i].WtperMeter === undefined ? "0" : String(weft[i].WtperMeter),
            RepeatMultiplier: weft[i].RepeatMultiplier,
            p1: weft[i].p1,
            p2: weft[i].p2,
            p3: weft[i].p3,
            p4: weft[i].p4,
            p5: weft[i].p5,
            p6: weft[i].p6,
            p7: weft[i].p7,
            p8: weft[i].p8,
            p9: weft[i].p9,
            p10: weft[i].p10,
            p11: weft[i].p11,
            p12: weft[i].p12,
            p13: weft[i].p13,
            p14: weft[i].p14,
            p15: weft[i].p15,
            p16: weft[i].p16,
            p17: weft[i].p17,
            p18: weft[i].p18,
            p19: weft[i].p19,
            p20: weft[i].p20
          }
          aTableArr1.push(obj1);
          TableModel.setProperty("/aTableData1", aTableArr1)
        }

      },
      onformulaweft: function (oEvent) {
        var weft = this.getView().getModel("oTableDataModel2").getProperty("/aTableData2");
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel2");
        this.getView().getModel("oTableDataModel2").setProperty("/aTableData2", []);
        var TableModel = this.getView().getModel("oTableDataModel2");
        var aTableArr1 = TableModel.getProperty("/aTableData2")
        var aTablearr1 = [];

        var p1m1 = 0; var p2m1 = 0; var p3m1 = 0; var p4m1 = 0; var p5m1 = 0; var p6m1 = 0; var p7m1 = 0; var p8m1 = 0; var p9m1 = 0; var p10m1 = 0; var p11m1 = 0; var p12m1 = 0; var p13m1 = 0; var p14m1 = 0; var p15m1 = 0; var p16m1 = 0; var p17m1 = 0; var p18m1 = 0; var p19m1 = 0; var p20m1 = 0;
        var p1m2 = 0; var p2m2 = 0; var p3m2 = 0; var p4m2 = 0; var p5m2 = 0; var p6m2 = 0; var p7m2 = 0; var p8m2 = 0; var p9m2 = 0; var p10m2 = 0; var p11m2 = 0; var p12m2 = 0; var p13m2 = 0; var p14m2 = 0; var p15m2 = 0; var p16m2 = 0; var p17m2 = 0; var p18m2 = 0; var p19m2 = 0; var p20m2 = 0;

        var p1r1 = ""; var p2r1 = ""; var p3r1 = ""; var p4r1 = ""; var p5r1 = ""; var p6r1 = ""; var p7r1 = ""; var p8r1 = ""; var p9r1 = ""; var p10r1 = ""; var p11r1 = ""; var p12r1 = ""; var p13r1 = ""; var p14r1 = ""; var p15r1 = ""; var p16r1 = ""; var p17r1 = ""; var p18r1 = ""; var p19r1 = ""; var p20r1 = "";
        var p1r2 = ""; var p2r2 = ""; var p3r2 = ""; var p4r2 = ""; var p5r2 = ""; var p6r2 = ""; var p7r2 = ""; var p8r2 = ""; var p9r2 = ""; var p10r2 = ""; var p11r2 = ""; var p12r2 = ""; var p13r2 = ""; var p14r2 = ""; var p15r2 = ""; var p16r2 = ""; var p17r2 = ""; var p18r2 = ""; var p19r2 = ""; var p20r2 = "";
        for (var i = 0; i < weft.length; i++) {
          if (weft[i].RepeatMultiplier === "R1") {
            weft[i].WtperMeter = "0";
            weft[i].endsPerRepeat = "0";
            if (weft[i].p1 != "") {
              p1r1 = weft[i].p1;
            }
            if (weft[i].p2 != "") {
              p2r1 = weft[i].p2;
            }
            if (weft[i].p3 != "") {
              p3r1 = weft[i].p3;
            }
            if (weft[i].p4 != "") {
              p4r1 = weft[i].p4;
            }
            if (weft[i].p5 != "") {
              p5r1 = weft[i].p5;
            }
            if (weft[i].p6 != "") {
              p6r1 = weft[i].p6;
            }
            if (weft[i].p7 != "") {
              p7r1 = weft[i].p7;
            }
            if (weft[i].p8 != "") {
              p8r1 = weft[i].p8;
            }
            if (weft[i].p9 != "") {
              p9r1 = weft[i].p9;
            }
            if (weft[i].p10 != "") {
              p10r1 = weft[i].p10;
            }
            if (weft[i].p11 != "") {
              p11r1 = weft[i].p11;
            }
            if (weft[i].p12 != "") {
              p12r1 = weft[i].p12;
            }
            if (weft[i].p13 != "") {
              p13r1 = weft[i].p13;
            }
            if (weft[i].p14 != "") {
              p14r1 = weft[i].p14;
            }
            if (weft[i].p15 != "") {
              p15r1 = weft[i].p15;
            }
            if (weft[i].p16 != "") {
              p16r1 = weft[i].p16;
            }
            if (weft[i].p17 != "") {
              p17r1 = weft[i].p17;
            }
            if (weft[i].p18 != "") {
              p18r1 = weft[i].p18;
            }
            if (weft[i].p19 != "") {
              p19r1 = weft[i].p19;
            }
            if (weft[i].p20 != "") {
              p20r1 = weft[i].p20;
            }
          }
          else if (weft[i].RepeatMultiplier === "R2") {
            weft[i].WtperMeter = "0";
            weft[i].endsPerRepeat = "0";
            if (weft[i].p1 != "") {
              p1r2 = weft[i].p1;
            }
            if (weft[i].p2 != "") {
              p2r2 = weft[i].p2;
            }
            if (weft[i].p3 != "") {
              p3r2 = weft[i].p3;
            }
            if (weft[i].p4 != "") {
              p4r2 = weft[i].p4;
            }
            if (weft[i].p5 != "") {
              p5r2 = weft[i].p5;
            }
            if (weft[i].p6 != "") {
              p6r2 = weft[i].p6;
            }
            if (weft[i].p7 != "") {
              p7r2 = weft[i].p7;
            }
            if (weft[i].p8 != "") {
              p8r2 = weft[i].p8;
            }
            if (weft[i].p9 != "") {
              p9r2 = weft[i].p9;
            }
            if (weft[i].p10 != "") {
              p10r2 = weft[i].p10;
            }
            if (weft[i].p11 != "") {
              p11r2 = weft[i].p11;
            }
            if (weft[i].p12 != "") {
              p12r2 = weft[i].p12;
            }
            if (weft[i].p13 != "") {
              p13r2 = weft[i].p13;
            }
            if (weft[i].p14 != "") {
              p14r2 = weft[i].p14;
            }
            if (weft[i].p15 != "") {
              p15r2 = weft[i].p15;
            }
            if (weft[i].p16 != "") {
              p16r2 = weft[i].p16;
            }
            if (weft[i].p17 != "") {
              p17r2 = weft[i].p17;
            }
            if (weft[i].p18 != "") {
              p18r2 = weft[i].p18;
            }
            if (weft[i].p19 != "") {
              p19r2 = weft[i].p19;
            }
            if (weft[i].p20 != "") {
              p20r2 = weft[i].p20;
            }
          }
          else if (weft[i].RepeatMultiplier === "M1") {
            weft[i].endsPerRepeat = "0";
            weft[i].WtperMeter = "0";




            // for p1
            if (weft[i].p1 != "") {
              p1m1 = Number(weft[i].p1);
            }


            //  for p2
            if (p1r1 === "[" && p2r1 === "") {
              p2m1 = Number(weft[i].p1);
            }
            else if (p1r1 === "[" && p2r1 === "]") {
              p2m1 = Number(weft[i].p1);
            }
            else
              if (weft[i].p2 != "") {

                p2m1 = Number(weft[i].p2);
              }

            //  for p3
            if (p1r1 === "[" && p2r1 === "" && p3r1 === "") {
              p3m1 = Number(weft[i].p1);
            }
            else
              if (p1r1 === "[" && p2r1 === "" && p3r1 === "]") {
                p3m1 = Number(weft[i].p1);

              }
              else if (p2r1 === "[" && p3r1 === "") {
                p3m1 = Number(weft[i].p2);
              }
              else if (p2r1 === "[" && p3r1 === "]") {
                p3m1 = Number(weft[i].p2);
              }
              else
                if (weft[i].p3 != "") {
                  p3m1 = Number(weft[i].p3);

                }

            //  for p4
            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "") {
              p4m1 = Number(weft[i].p1);
            }
            else
              if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "]") {
                p4m1 = Number(weft[i].p1);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "") {
                p4m1 = Number(weft[i].p2);
              }
              else if (p2r1 === "[" && p3r1 === "" && p4r1 === "]") {
                p4m1 = Number(weft[i].p2);
              }
              else if (p3r1 === "[" && p4r1 === "]") {
                p4m1 = Number(weft[i].p3);
              }
              else if (p3r1 === "[" && p4r1 === "") {
                p4m1 = Number(weft[i].p3);
              }
              else if (weft[i].p4 != "") {
                p4m1 = Number(weft[i].p4);
              }




            // for p5
            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "") {
              p5m1 = Number(weft[i].p1);
            }
            else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "]") {
              p5m1 = Number(weft[i].p1);
            }
            else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "]") {
              p5m1 = Number(weft[i].p2);
            }
            else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "") {
              p5m1 = Number(weft[i].p2);
            }
            else if (p3r1 === "[" && p4r1 === "" && p5r1 === "") {
              p5m1 = Number(weft[i].p3);
            }
            else if (p3r1 === "[" && p4r1 === "" && p5r1 === "]") {
              p5m1 = Number(weft[i].p3);
            }
            else if (p4r1 === "[" && p5r1 === "") {
              p5m1 = Number(weft[i].p4);
            }
            else if (p4r1 === "[" && p5r1 === "]") {
              p5m1 = Number(weft[i].p4);
            }
            else if (weft[i].p5 != "") {
              p5m1 = Number(weft[i].p5);
            }

            // for p6
            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "") {
              p6m1 = Number(weft[i].p1);
            }
            else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "]") {
              p6m1 = Number(weft[i].p1);
            }
            else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "") {
              p6m1 = Number(weft[i].p2);
            }
            else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "]") {
              p6m1 = Number(weft[i].p2);
            }
            else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "") {
              p6m1 = Number(weft[i].p3);
            }
            else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "]") {
              p6m1 = Number(weft[i].p3);
            }
            else if (p4r1 === "[" && p5r1 === "" && p6r1 === "") {
              p6m1 = Number(weft[i].p4);
            }
            else if (p4r1 === "[" && p5r1 === "" && p6r1 === "]") {
              p6m1 = Number(weft[i].p4);
            }
            else if (p5r1 === "[" && p6r1 === "") {
              p6m1 = Number(weft[i].p5);
            }
            else if (p5r1 === "[" && p6r1 === "]") {
              p6m1 = Number(weft[i].p5);
            }
            else if (weft[i].p6 != "") {
              p6m1 = Number(weft[i].p6);
            }

            // for p7

            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "") {
              p7m1 = Number(weft[i].p1);
            }
            else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "]") {
              p7m1 = Number(weft[i].p1);
            }
            else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "") {
              p7m1 = Number(weft[i].p2);
            }
            else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "]") {
              p7m1 = Number(weft[i].p2);
            }
            else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "") {
              p7m1 = Number(weft[i].p3);
            }
            else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "]") {
              p7m1 = Number(weft[i].p3);
            }
            else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "") {
              p7m1 = Number(weft[i].p4);
            }
            else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "]") {
              p7m1 = Number(weft[i].p4);
            }
            else if (p5r1 === "[" && p6r1 === "" && p7r1 === "") {
              p7m1 = Number(weft[i].p5);
            }
            else if (p5r1 === "[" && p6r1 === "" && p7r1 === "]") {
              p7m1 = Number(weft[i].p5);
            }
            else if (p6r1 === "[" && p7r1 === "") {
              p7m1 = Number(weft[i].p6);
            }
            else if (p6r1 === "[" && p7r1 === "]") {
              p7m1 = Number(weft[i].p6);
            }
            else if (weft[i].p7 != "") {
              p7m1 = Number(weft[i].p7);
            }








            // for p8
            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "") {
              p8m1 = Number(weft[i].p1);
            }
            else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "]") {
              p8m1 = Number(weft[i].p1);
            }
            else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "") {
              p8m1 = Number(weft[i].p2);
            }
            else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "]") {
              p8m1 = Number(weft[i].p2);
            }
            else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "") {
              p8m1 = Number(weft[i].p3);
            }
            else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "]") {
              p8m1 = Number(weft[i].p3);
            }
            else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "") {
              p8m1 = Number(weft[i].p4);
            }
            else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "]") {
              p8m1 = Number(weft[i].p4);
            }
            else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "") {
              p8m1 = Number(weft[i].p5);
            }
            else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "]") {
              p8m1 = Number(weft[i].p5);
            }
            else if (p6r1 === "[" && p7r1 === "" && p8r1 === "") {
              p8m1 = Number(weft[i].p6);
            }
            else if (p6r1 === "[" && p7r1 === "" && p8r1 === "]") {
              p8m1 = Number(weft[i].p6);
            }
            else if (p7r1 === "[" && p8r1 === "") {
              p8m1 = Number(weft[i].p7);
            }
            else if (p7r1 === "[" && p8r1 === "]") {
              p8m1 = Number(weft[i].p7);
            }
            else if (weft[i].p8 != "") {
              p8m1 = Number(weft[i].p8);
            }







            // for p9
            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
              p9m1 = Number(weft[i].p1);
            }
            else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
              p9m1 = Number(weft[i].p1);
            }
            else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
              p9m1 = Number(weft[i].p2);
            }
            else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
              p9m1 = Number(weft[i].p2);
            }
            else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
              p9m1 = Number(weft[i].p3);
            }
            else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
              p9m1 = Number(weft[i].p3);
            }
            else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
              p9m1 = Number(weft[i].p4);
            }
            else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
              p9m1 = Number(weft[i].p4);
            }
            else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
              p9m1 = Number(weft[i].p5);
            }
            else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
              p9m1 = Number(weft[i].p5);
            }
            else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "") {
              p9m1 = Number(weft[i].p6);
            }
            else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "]") {
              p9m1 = Number(weft[i].p6);
            }
            else if (p7r1 === "[" && p8r1 === "" && p9r1 === "") {
              p9m1 = Number(weft[i].p7);
            }
            else if (p7r1 === "[" && p8r1 === "" && p9r1 === "]") {
              p9m1 = Number(weft[i].p7);
            }
            else if (p8r1 === "[" && p9r1 === "") {
              p9m1 = Number(weft[i].p8);
            }
            else if (p8r1 === "[" && p9r1 === "]") {
              p9m1 = Number(weft[i].p8);
            }
            else if (weft[i].p9 != "") {
              p9m1 = Number(weft[i].p9);
            }


            // for p10

            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
              p10m1 = Number(weft[i].p1);
            } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
              p10m1 = Number(weft[i].p1);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
              p10m1 = Number(weft[i].p2);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
              p10m1 = Number(weft[i].p2);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
              p10m1 = Number(weft[i].p3);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
              p10m1 = Number(weft[i].p3);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
              p10m1 = Number(weft[i].p4);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
              p10m1 = Number(weft[i].p4);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
              p10m1 = Number(weft[i].p5);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
              p10m1 = Number(weft[i].p5);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
              p10m1 = Number(weft[i].p6);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
              p10m1 = Number(weft[i].p6);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "") {
              p10m1 = Number(weft[i].p7);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "]") {
              p10m1 = Number(weft[i].p7);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "") {
              p10m1 = Number(weft[i].p8);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "]") {
              p10m1 = Number(weft[i].p8);
            } else if (p9r1 === "[" && p10r1 === "") {
              p10m1 = Number(weft[i].p9);
            } else if (p9r1 === "[" && p10r1 === "]") {
              p10m1 = Number(weft[i].p9);
            } else if (weft[i].p10 !== "") {
              p10m1 = Number(weft[i].p10);
            }

            // for p11

            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
              p11m1 = Number(weft[i].p1);
            } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
              p11m1 = Number(weft[i].p1);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
              p11m1 = Number(weft[i].p2);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
              p11m1 = Number(weft[i].p2);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
              p11m1 = Number(weft[i].p3);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
              p11m1 = Number(weft[i].p3);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
              p11m1 = Number(weft[i].p4);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
              p11m1 = Number(weft[i].p4);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
              p11m1 = Number(weft[i].p5);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
              p11m1 = Number(weft[i].p5);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
              p11m1 = Number(weft[i].p6);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
              p11m1 = Number(weft[i].p6);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
              p11m1 = Number(weft[i].p7);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
              p11m1 = Number(weft[i].p7);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "") {
              p11m1 = Number(weft[i].p8);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "]") {
              p11m1 = Number(weft[i].p8);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "") {
              p11m1 = Number(weft[i].p9);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "]") {
              p11m1 = Number(weft[i].p9);
            } else if (p10r1 === "[" && p11r1 === "") {
              p11m1 = Number(weft[i].p10);
            } else if (p10r1 === "[" && p11r1 === "]") {
              p11m1 = Number(weft[i].p10);
            } else if (weft[i].p11 !== "") {
              p11m1 = Number(weft[i].p11);
            }


            // for p12

            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
              p12m1 = Number(weft[i].p1);
            } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
              p12m1 = Number(weft[i].p1);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
              p12m1 = Number(weft[i].p2);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
              p12m1 = Number(weft[i].p2);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
              p12m1 = Number(weft[i].p3);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
              p12m1 = Number(weft[i].p3);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
              p12m1 = Number(weft[i].p4);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
              p12m1 = Number(weft[i].p4);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
              p12m1 = Number(weft[i].p5);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
              p12m1 = Number(weft[i].p5);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
              p12m1 = Number(weft[i].p6);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
              p12m1 = Number(weft[i].p6);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
              p12m1 = Number(weft[i].p7);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
              p12m1 = Number(weft[i].p7);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
              p12m1 = Number(weft[i].p8);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
              p12m1 = Number(weft[i].p8);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "") {
              p12m1 = Number(weft[i].p9);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "]") {
              p12m1 = Number(weft[i].p9);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "") {
              p12m1 = Number(weft[i].p10);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "]") {
              p12m1 = Number(weft[i].p10);
            } else if (p11r1 === "[" && p12r1 === "") {
              p12m1 = Number(weft[i].p11);
            } else if (p11r1 === "[" && p12r1 === "]") {
              p12m1 = Number(weft[i].p11);
            } else if (weft[i].p12 !== "") {
              p12m1 = Number(weft[i].p12);
            }

            // for p13

            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
              p13m1 = Number(weft[i].p1);
            } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
              p13m1 = Number(weft[i].p1);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
              p13m1 = Number(weft[i].p2);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
              p13m1 = Number(weft[i].p2);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
              p13m1 = Number(weft[i].p3);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
              p13m1 = Number(weft[i].p3);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
              p13m1 = Number(weft[i].p4);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
              p13m1 = Number(weft[i].p4);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
              p13m1 = Number(weft[i].p5);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
              p13m1 = Number(weft[i].p5);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
              p13m1 = Number(weft[i].p6);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
              p13m1 = Number(weft[i].p6);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
              p13m1 = Number(weft[i].p7);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
              p13m1 = Number(weft[i].p7);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
              p13m1 = Number(weft[i].p8);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
              p13m1 = Number(weft[i].p8);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
              p13m1 = Number(weft[i].p9);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
              p13m1 = Number(weft[i].p9);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "") {
              p13m1 = Number(weft[i].p10);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "]") {
              p13m1 = Number(weft[i].p10);
            } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "") {
              p13m1 = Number(weft[i].p11);
            } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "]") {
              p13m1 = Number(weft[i].p11);
            } else if (p12r1 === "[" && p13r1 === "") {
              p13m1 = Number(weft[i].p12);
            } else if (p12r1 === "[" && p13r1 === "]") {
              p13m1 = Number(weft[i].p12);
            } else if (weft[i].p13 !== "") {
              p13m1 = Number(weft[i].p13);
            }


            // for p14


            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
              p14m1 = Number(weft[i].p1);
            } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
              p14m1 = Number(weft[i].p1);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
              p14m1 = Number(weft[i].p2);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
              p14m1 = Number(weft[i].p2);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
              p14m1 = Number(weft[i].p3);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
              p14m1 = Number(weft[i].p3);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
              p14m1 = Number(weft[i].p4);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
              p14m1 = Number(weft[i].p4);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
              p14m1 = Number(weft[i].p5);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
              p14m1 = Number(weft[i].p5);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
              p14m1 = Number(weft[i].p6);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
              p14m1 = Number(weft[i].p6);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
              p14m1 = Number(weft[i].p7);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
              p14m1 = Number(weft[i].p7);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
              p14m1 = Number(weft[i].p8);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
              p14m1 = Number(weft[i].p8);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
              p14m1 = Number(weft[i].p9);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
              p14m1 = Number(weft[i].p9);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
              p14m1 = Number(weft[i].p10);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
              p14m1 = Number(weft[i].p10);
            } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "") {
              p14m1 = Number(weft[i].p11);
            } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "]") {
              p14m1 = Number(weft[i].p11);
            } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "") {
              p14m1 = Number(weft[i].p12);
            } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "]") {
              p14m1 = Number(weft[i].p12);
            } else if (p13r1 === "[" && p14r1 === "") {
              p14m1 = Number(weft[i].p13);
            } else if (p13r1 === "[" && p14r1 === "]") {
              p14m1 = Number(weft[i].p13);
            } else if (weft[i].p14 !== "") {
              p14m1 = Number(weft[i].p14);
            }


            // for p15

            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
              p15m1 = Number(weft[i].p1);
            } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
              p15m1 = Number(weft[i].p1);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
              p15m1 = Number(weft[i].p2);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
              p15m1 = Number(weft[i].p2);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
              p15m1 = Number(weft[i].p3);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
              p15m1 = Number(weft[i].p3);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
              p15m1 = Number(weft[i].p4);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
              p15m1 = Number(weft[i].p4);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
              p15m1 = Number(weft[i].p5);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
              p15m1 = Number(weft[i].p5);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
              p15m1 = Number(weft[i].p6);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
              p15m1 = Number(weft[i].p6);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
              p15m1 = Number(weft[i].p7);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
              p15m1 = Number(weft[i].p7);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
              p15m1 = Number(weft[i].p8);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
              p15m1 = Number(weft[i].p8);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
              p15m1 = Number(weft[i].p9);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
              p15m1 = Number(weft[i].p9);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
              p15m1 = Number(weft[i].p10);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
              p15m1 = Number(weft[i].p10);
            } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
              p15m1 = Number(weft[i].p11);
            } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
              p15m1 = Number(weft[i].p11);
            } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "") {
              p15m1 = Number(weft[i].p12);
            } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "]") {
              p15m1 = Number(weft[i].p12);
            } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "") {
              p15m1 = Number(weft[i].p13);
            } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "]") {
              p15m1 = Number(weft[i].p13);
            } else if (p14r1 === "[" && p15r1 === "") {
              p15m1 = Number(weft[i].p14);
            } else if (p14r1 === "[" && p15r1 === "]") {
              p15m1 = Number(weft[i].p14);
            } else if (weft[i].p15 !== "") {
              p15m1 = Number(weft[i].p15);
            }

            // for p16

            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
              p16m1 = Number(weft[i].p1);
            } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
              p16m1 = Number(weft[i].p1);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
              p16m1 = Number(weft[i].p2);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
              p16m1 = Number(weft[i].p2);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
              p16m1 = Number(weft[i].p3);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
              p16m1 = Number(weft[i].p3);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
              p16m1 = Number(weft[i].p4);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
              p16m1 = Number(weft[i].p4);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
              p16m1 = Number(weft[i].p5);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
              p16m1 = Number(weft[i].p5);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
              p16m1 = Number(weft[i].p6);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
              p16m1 = Number(weft[i].p6);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
              p16m1 = Number(weft[i].p7);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
              p16m1 = Number(weft[i].p7);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
              p16m1 = Number(weft[i].p8);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
              p16m1 = Number(weft[i].p8);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
              p16m1 = Number(weft[i].p9);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
              p16m1 = Number(weft[i].p9);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
              p16m1 = Number(weft[i].p10);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
              p16m1 = Number(weft[i].p10);
            } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
              p16m1 = Number(weft[i].p11);
            } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
              p16m1 = Number(weft[i].p11);
            } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
              p16m1 = Number(weft[i].p12);
            } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
              p16m1 = Number(weft[i].p12);
            } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "") {
              p16m1 = Number(weft[i].p13);
            } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "]") {
              p16m1 = Number(weft[i].p13);
            } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "") {
              p16m1 = Number(weft[i].p14);
            } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "]") {
              p16m1 = Number(weft[i].p14);
            } else if (p15r1 === "[" && p16r1 === "") {
              p16m1 = Number(weft[i].p15);
            } else if (p15r1 === "[" && p16r1 === "]") {
              p16m1 = Number(weft[i].p15);
            } else if (weft[i].p16 !== "") {
              p16m1 = Number(weft[i].p16);
            }


            // for p17

            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
              p17m1 = Number(weft[i].p1);
            } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
              p17m1 = Number(weft[i].p1);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
              p17m1 = Number(weft[i].p2);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
              p17m1 = Number(weft[i].p2);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
              p17m1 = Number(weft[i].p3);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
              p17m1 = Number(weft[i].p3);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
              p17m1 = Number(weft[i].p4);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
              p17m1 = Number(weft[i].p4);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
              p17m1 = Number(weft[i].p5);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
              p17m1 = Number(weft[i].p5);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
              p17m1 = Number(weft[i].p6);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
              p17m1 = Number(weft[i].p6);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
              p17m1 = Number(weft[i].p7);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
              p17m1 = Number(weft[i].p7);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
              p17m1 = Number(weft[i].p8);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
              p17m1 = Number(weft[i].p8);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
              p17m1 = Number(weft[i].p9);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
              p17m1 = Number(weft[i].p9);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
              p17m1 = Number(weft[i].p10);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
              p17m1 = Number(weft[i].p10);
            } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
              p17m1 = Number(weft[i].p11);
            } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
              p17m1 = Number(weft[i].p11);
            } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
              p17m1 = Number(weft[i].p12);
            } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
              p17m1 = Number(weft[i].p12);
            } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
              p17m1 = Number(weft[i].p13);
            } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
              p17m1 = Number(weft[i].p13);
            } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "") {
              p17m1 = Number(weft[i].p14);
            } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "]") {
              p17m1 = Number(weft[i].p14);
            } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "") {
              p17m1 = Number(weft[i].p15);
            } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "]") {
              p17m1 = Number(weft[i].p15);
            } else if (p16r1 === "[" && p17r1 === "") {
              p17m1 = Number(weft[i].p16);
            } else if (p16r1 === "[" && p17r1 === "]") {
              p17m1 = Number(weft[i].p16);
            } else if (weft[i].p17 !== "") {
              p17m1 = Number(weft[i].p17);
            }



            // for p18

            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
              p18m1 = Number(weft[i].p1);
            } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
              p18m1 = Number(weft[i].p1);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
              p18m1 = Number(weft[i].p2);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
              p18m1 = Number(weft[i].p2);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
              p18m1 = Number(weft[i].p3);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
              p18m1 = Number(weft[i].p3);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
              p18m1 = Number(weft[i].p4);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
              p18m1 = Number(weft[i].p4);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
              p18m1 = Number(weft[i].p5);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
              p18m1 = Number(weft[i].p5);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
              p18m1 = Number(weft[i].p6);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
              p18m1 = Number(weft[i].p6);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
              p18m1 = Number(weft[i].p7);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
              p18m1 = Number(weft[i].p7);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
              p18m1 = Number(weft[i].p8);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
              p18m1 = Number(weft[i].p8);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
              p18m1 = Number(weft[i].p9);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
              p18m1 = Number(weft[i].p9);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
              p18m1 = Number(weft[i].p10);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
              p18m1 = Number(weft[i].p10);
            } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
              p18m1 = Number(weft[i].p11);
            } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
              p18m1 = Number(weft[i].p11);
            } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
              p18m1 = Number(weft[i].p12);
            } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
              p18m1 = Number(weft[i].p12);
            } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
              p18m1 = Number(weft[i].p13);
            } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
              p18m1 = Number(weft[i].p13);
            } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
              p18m1 = Number(weft[i].p14);
            } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
              p18m1 = Number(weft[i].p14);
            } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "") {
              p18m1 = Number(weft[i].p15);
            } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "]") {
              p18m1 = Number(weft[i].p15);
            } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "") {
              p18m1 = Number(weft[i].p16);
            } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "]") {
              p18m1 = Number(weft[i].p16);
            } else if (p17r1 === "[" && p18r1 === "") {
              p18m1 = Number(weft[i].p17);
            } else if (p17r1 === "[" && p18r1 === "]") {
              p18m1 = Number(weft[i].p17);
            } else if (weft[i].p18 !== "") {
              p18m1 = Number(weft[i].p18);
            }


            // for p19


            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p1);
            } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p1);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p2);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p2);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p3);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p3);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p4);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p4);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p5);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p5);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p6);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p6);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p7);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p7);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p8);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p8);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p9);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p9);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p10);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p10);
            } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p11);
            } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p11);
            } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p12);
            } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p12);
            } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p13);
            } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p13);
            } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p14);
            } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p14);
            } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p15);
            } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p15);
            } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p16);
            } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p16);
            } else if (p17r1 === "[" && p18r1 === "" && p19r1 === "") {
              p19m1 = Number(weft[i].p17);
            } else if (p17r1 === "[" && p18r1 === "" && p19r1 === "]") {
              p19m1 = Number(weft[i].p17);
            } else if (p18r1 === "[" && p19r1 === "") {
              p19m1 = Number(weft[i].p18);
            } else if (p18r1 === "[" && p19r1 === "]") {
              p19m1 = Number(weft[i].p18);
            } else if (weft[i].p19 !== "") {
              p19m1 = Number(weft[i].p19);
            }


            // for p20

            if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p1);
            } else if (p1r1 === "[" && p2r1 === "" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p1);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p2);
            } else if (p2r1 === "[" && p3r1 === "" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p2);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p3);
            } else if (p3r1 === "[" && p4r1 === "" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p3);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p4);
            } else if (p4r1 === "[" && p5r1 === "" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p4);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p5);
            } else if (p5r1 === "[" && p6r1 === "" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p5);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p6);
            } else if (p6r1 === "[" && p7r1 === "" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p6);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p7);
            } else if (p7r1 === "[" && p8r1 === "" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p7);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p8);
            } else if (p8r1 === "[" && p9r1 === "" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p8);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p9);
            } else if (p9r1 === "[" && p10r1 === "" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p9);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p10);
            } else if (p10r1 === "[" && p11r1 === "" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p10);
            } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p11);
            } else if (p11r1 === "[" && p12r1 === "" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p11);
            } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p12);
            } else if (p12r1 === "[" && p13r1 === "" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p12);
            } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p13);
            } else if (p13r1 === "[" && p14r1 === "" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p13);
            } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p14);
            } else if (p14r1 === "[" && p15r1 === "" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p14);
            } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p15);
            } else if (p15r1 === "[" && p16r1 === "" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p15);
            } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p16);
            } else if (p16r1 === "[" && p17r1 === "" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p16);
            } else if (p17r1 === "[" && p18r1 === "" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p17);
            } else if (p17r1 === "[" && p18r1 === "" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p17);
            } else if (p18r1 === "[" && p19r1 === "" && p20r1 === "") {
              p20m1 = Number(weft[i].p18);
            } else if (p18r1 === "[" && p19r1 === "" && p20r1 === "]") {
              p20m1 = Number(weft[i].p18);
            } else if (p19r1 === "[" && p20r1 === "") {
              p20m1 = Number(weft[i].p19);
            } else if (p19r1 === "[" && p20r1 === "]") {
              p20m1 = Number(weft[i].p19);
            } else if (weft[i].p20 !== "") {
              p20m1 = Number(weft[i].p20);
            }

          }
          else if (weft[i].RepeatMultiplier === "M2") {
            weft[i].endsPerRepeat = "0";
            weft[i].WtperMeter = "0";

            // for p1
            if (weft[i].p1 != "") {
              p1m2 = Number(weft[i].p1);
            }


            //  for p2
            if (p1r2 === "[" && p2r2 === "") {
              p2m2 = Number(weft[i].p1);
            }
            else if (p1r2 === "[" && p2r2 === "]") {
              p2m2 = Number(weft[i].p1);
            }
            else
              if (weft[i].p2 != "") {

                p2m2 = Number(weft[i].p2);
              }



            //  for p3
            if (p1r2 === "[" && p2r2 === "" && p3r2 === "") {
              p3m2 = Number(weft[i].p1);
            }
            else
              if (p1r2 === "[" && p2r2 === "" && p3r2 === "]") {
                p3m2 = Number(weft[i].p1);

              }
              else if (p2r2 === "[" && p3r2 === "") {
                p3m2 = Number(weft[i].p2);
              }
              else if (p2r2 === "[" && p3r2 === "]") {
                p3m2 = Number(weft[i].p2);
              }
              else
                if (weft[i].p3 != "") {
                  p3m2 = Number(weft[i].p3);

                }

            //  for p4
            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "") {
              p4m2 = Number(weft[i].p1);
            }
            else
              if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "]") {
                p4m2 = Number(weft[i].p1);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "") {
                p4m2 = Number(weft[i].p2);
              }
              else if (p2r2 === "[" && p3r2 === "" && p4r2 === "]") {
                p4m2 = Number(weft[i].p2);
              }
              else if (p3r2 === "[" && p4r2 === "]") {
                p4m2 = Number(weft[i].p3);
              }
              else if (p3r2 === "[" && p4r2 === "") {
                p4m2 = Number(weft[i].p3);
              }
              else if (weft[i].p4 != "") {
                p4m2 = Number(weft[i].p4);
              }




            // for p5
            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "") {
              p5m2 = Number(weft[i].p1);
            }
            else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "]") {
              p5m2 = Number(weft[i].p1);
            }
            else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "]") {
              p5m2 = Number(weft[i].p2);
            }
            else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "") {
              p5m2 = Number(weft[i].p2);
            }
            else if (p3r2 === "[" && p4r2 === "" && p5r2 === "") {
              p5m2 = Number(weft[i].p3);
            }
            else if (p3r2 === "[" && p4r2 === "" && p5r2 === "]") {
              p5m2 = Number(weft[i].p3);
            }
            else if (p4r2 === "[" && p5r2 === "") {
              p5m2 = Number(weft[i].p4);
            }
            else if (p4r2 === "[" && p52 === "]") {
              p5m2 = Number(weft[i].p4);
            }
            else if (weft[i].p5 != "") {
              p5m2 = Number(weft[i].p5);
            }

            // for p6
            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "") {
              p6m2 = Number(weft[i].p1);
            }
            else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "]") {
              p6m2 = Number(weft[i].p1);
            }
            else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "") {
              p6m2 = Number(weft[i].p2);
            }
            else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "]") {
              p6m2 = Number(weft[i].p2);
            }
            else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "") {
              p6m2 = Number(weft[i].p3);
            }
            else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "]") {
              p6m2 = Number(weft[i].p3);
            }
            else if (p4r2 === "[" && p5r2 === "" && p6r2 === "") {
              p6m2 = Number(weft[i].p4);
            }
            else if (p4r2 === "[" && p5r2 === "" && p6r2 === "]") {
              p6m2 = Number(weft[i].p4);
            }
            else if (p5r2 === "[" && p6r2 === "") {
              p6m2 = Number(weft[i].p5);
            }
            else if (p5r2 === "[" && p6r2 === "]") {
              p6m2 = Number(weft[i].p5);
            }
            else if (weft[i].p6 != "") {
              p6m2 = Number(weft[i].p6);
            }

            // for p7

            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "") {
              p7m2 = Number(weft[i].p1);
            }
            else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "]") {
              p7m2 = Number(weft[i].p1);
            }
            else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "") {
              p7m2 = Number(weft[i].p2);
            }
            else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "]") {
              p7m2 = Number(weft[i].p2);
            }
            else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "") {
              p7m2 = Number(weft[i].p3);
            }
            else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "]") {
              p7m2 = Number(weft[i].p3);
            }
            else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "") {
              p7m2 = Number(weft[i].p4);
            }
            else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "]") {
              p7m2 = Number(weft[i].p4);
            }
            else if (p5r2 === "[" && p6r2 === "" && p7r2 === "") {
              p7m2 = Number(weft[i].p5);
            }
            else if (p5r2 === "[" && p6r2 === "" && p7r2 === "]") {
              p7m2 = Number(weft[i].p5);
            }
            else if (p6r2 === "[" && p7r2 === "") {
              p7m2 = Number(weft[i].p6);
            }
            else if (p6r2 === "[" && p7r2 === "]") {
              p7m2 = Number(weft[i].p6);
            }
            else if (weft[i].p7 != "") {
              p7m2 = Number(weft[i].p7);
            }

            // for p8
            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "") {
              p8m2 = Number(weft[i].p1);
            }
            else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "]") {
              p8m2 = Number(weft[i].p1);
            }
            else if (p2r1 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "") {
              p8m2 = Number(weft[i].p2);
            }
            else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "]") {
              p8m2 = Number(weft[i].p2);
            }
            else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "") {
              p8m2 = Number(weft[i].p3);
            }
            else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "]") {
              p8m2 = Number(weft[i].p3);
            }
            else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "") {
              p8m2 = Number(weft[i].p4);
            }
            else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "]") {
              p8m2 = Number(weft[i].p4);
            }
            else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "") {
              p8m2 = Number(weft[i].p5);
            }
            else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "]") {
              p8m2 = Number(weft[i].p5);
            }
            else if (p6r2 === "[" && p7r2 === "" && p8r2 === "") {
              p8m2 = Number(weft[i].p6);
            }
            else if (p6r2 === "[" && p7r2 === "" && p8r2 === "]") {
              p8m2 = Number(weft[i].p6);
            }
            else if (p7r2 === "[" && p8r2 === "") {
              p8m2 = Number(weft[i].p7);
            }
            else if (p7r2 === "[" && p8r2 === "]") {
              p8m2 = Number(weft[i].p7);
            }
            else if (weft[i].p8 != "") {
              p8m2 = Number(weft[i].p8);
            }

            // for p9
            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
              p9m2 = Number(weft[i].p1);
            }
            else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
              p9m2 = Number(weft[i].p1);
            }
            else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
              p9m2 = Number(weft[i].p2);
            }
            else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
              p9m2 = Number(weft[i].p2);
            }
            else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
              p9m2 = Number(weft[i].p3);
            }
            else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
              p9m2 = Number(weft[i].p3);
            }
            else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
              p9m2 = Number(weft[i].p4);
            }
            else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
              p9m2 = Number(weft[i].p4);
            }
            else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
              p9m2 = Number(weft[i].p5);
            }
            else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
              p9m2 = Number(weft[i].p5);
            }
            else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "") {
              p9m2 = Number(weft[i].p6);
            }
            else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "]") {
              p9m2 = Number(weft[i].p6);
            }
            else if (p7r2 === "[" && p8r2 === "" && p9r2 === "") {
              p9m2 = Number(weft[i].p7);
            }
            else if (p7r2 === "[" && p8r2 === "" && p9r2 === "]") {
              p9m2 = Number(weft[i].p7);
            }
            else if (p8r2 === "[" && p9r2 === "") {
              p9m2 = Number(weft[i].p8);
            }
            else if (p8r2 === "[" && p9r2 === "]") {
              p9m2 = Number(weft[i].p8);
            }
            else if (weft[i].p9 != "") {
              p9m2 = Number(weft[i].p9);
            }



            // for p10

            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
              p10m2 = Number(weft[i].p1);
            } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
              p10m2 = Number(weft[i].p1);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
              p10m2 = Number(weft[i].p2);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
              p10m2 = Number(weft[i].p2);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
              p10m2 = Number(weft[i].p3);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
              p10m2 = Number(weft[i].p3);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
              p10m2 = Number(weft[i].p4);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
              p10m2 = Number(weft[i].p4);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
              p10m2 = Number(weft[i].p5);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
              p10m2 = Number(weft[i].p5);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
              p10m2 = Number(weft[i].p6);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
              p10m2 = Number(weft[i].p6);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "") {
              p10m2 = Number(weft[i].p7);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "]") {
              p10m2 = Number(weft[i].p7);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "") {
              p10m2 = Number(weft[i].p8);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "]") {
              p10m2 = Number(weft[i].p8);
            } else if (p9r2 === "[" && p10r2 === "") {
              p10m2 = Number(weft[i].p9);
            } else if (p9r2 === "[" && p10r2 === "]") {
              p10m2 = Number(weft[i].p9);
            } else if (weft[i].p10 !== "") {
              p10m2 = Number(weft[i].p10);
            }

            // for p11

            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
              p11m2 = Number(weft[i].p1);
            } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
              p11m2 = Number(weft[i].p1);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
              p11m2 = Number(weft[i].p2);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
              p11m2 = Number(weft[i].p2);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
              p11m2 = Number(weft[i].p3);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
              p11m2 = Number(weft[i].p3);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
              p11m2 = Number(weft[i].p4);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
              p11m2 = Number(weft[i].p4);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
              p11m2 = Number(weft[i].p5);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
              p11m2 = Number(weft[i].p5);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
              p11m2 = Number(weft[i].p6);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
              p11m2 = Number(weft[i].p6);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
              p11m2 = Number(weft[i].p7);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
              p11m2 = Number(weft[i].p7);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "") {
              p11m2 = Number(weft[i].p8);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "]") {
              p11m2 = Number(weft[i].p8);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "") {
              p11m2 = Number(weft[i].p9);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "]") {
              p11m2 = Number(weft[i].p9);
            } else if (p10r2 === "[" && p11r2 === "") {
              p11m2 = Number(weft[i].p10);
            } else if (p10r2 === "[" && p11r2 === "]") {
              p11m2 = Number(weft[i].p10);
            }
            else if (weft[i].p11 !== "") {
              p11m2 = Number(weft[i].p11);
            }

            // for p12

            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
              p12m2 = Number(weft[i].p1);
            } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
              p12m2 = Number(weft[i].p1);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
              p12m2 = Number(weft[i].p2);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
              p12m2 = Number(weft[i].p2);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
              p12m2 = Number(weft[i].p3);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
              p12m2 = Number(weft[i].p3);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
              p12m2 = Number(weft[i].p4);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
              p12m2 = Number(weft[i].p4);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
              p12m2 = Number(weft[i].p5);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
              p12m2 = Number(weft[i].p5);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
              p12m2 = Number(weft[i].p6);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
              p12m2 = Number(weft[i].p6);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
              p12m2 = Number(weft[i].p7);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
              p12m2 = Number(weft[i].p7);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
              p12m2 = Number(weft[i].p8);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
              p12m2 = Number(weft[i].p8);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "") {
              p12m2 = Number(weft[i].p9);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "]") {
              p12m2 = Number(weft[i].p9);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "") {
              p12m2 = Number(weft[i].p10);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "]") {
              p12m2 = Number(weft[i].p10);
            } else if (p11r2 === "[" && p12r2 === "") {
              p12m2 = Number(weft[i].p11);
            } else if (p11r2 === "[" && p12r2 === "]") {
              p12m2 = Number(weft[i].p11);
            } else if (weft[i].p12 !== "") {
              p12m2 = Number(weft[i].p12);
            }

            // for p13

            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
              p13m2 = Number(weft[i].p1);
            } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
              p13m2 = Number(weft[i].p1);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
              p13m2 = Number(weft[i].p2);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
              p13m2 = Number(weft[i].p2);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
              p13m2 = Number(weft[i].p3);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
              p13m2 = Number(weft[i].p3);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
              p13m2 = Number(weft[i].p4);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
              p13m2 = Number(weft[i].p4);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
              p13m2 = Number(weft[i].p5);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
              p13m2 = Number(weft[i].p5);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
              p13m2 = Number(weft[i].p6);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
              p13m2 = Number(weft[i].p6);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
              p13m2 = Number(weft[i].p7);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
              p13m2 = Number(weft[i].p7);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
              p13m2 = Number(weft[i].p8);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
              p13m2 = Number(weft[i].p8);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
              p13m2 = Number(weft[i].p9);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
              p13m2 = Number(weft[i].p9);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "") {
              p13m2 = Number(weft[i].p10);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "]") {
              p13m2 = Number(weft[i].p10);
            } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "") {
              p13m2 = Number(weft[i].p11);
            } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "]") {
              p13m2 = Number(weft[i].p11);
            } else if (p12r2 === "[" && p13r2 === "") {
              p13m2 = Number(weft[i].p12);
            } else if (p12r2 === "[" && p13r2 === "]") {
              p13m2 = Number(weft[i].p12);
            } else if (weft[i].p13 !== "") {
              p13m2 = Number(weft[i].p13);
            }


            // for p14


            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
              p14m2 = Number(weft[i].p1);
            } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
              p14m2 = Number(weft[i].p1);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
              p14m2 = Number(weft[i].p2);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
              p14m2 = Number(weft[i].p2);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
              p14m2 = Number(weft[i].p3);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
              p14m2 = Number(weft[i].p3);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
              p14m2 = Number(weft[i].p4);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
              p14m2 = Number(weft[i].p4);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
              p14m2 = Number(weft[i].p5);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
              p14m2 = Number(weft[i].p5);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
              p14m2 = Number(weft[i].p6);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
              p14m2 = Number(weft[i].p6);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
              p14m2 = Number(weft[i].p7);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
              p14m2 = Number(weft[i].p7);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
              p14m2 = Number(weft[i].p8);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
              p14m2 = Number(weft[i].p8);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
              p14m2 = Number(weft[i].p9);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
              p14m2 = Number(weft[i].p9);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
              p14m2 = Number(weft[i].p10);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
              p14m2 = Number(weft[i].p10);
            } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "") {
              p14m2 = Number(weft[i].p11);
            } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "]") {
              p14m2 = Number(weft[i].p11);
            } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "") {
              p14m2 = Number(weft[i].p12);
            } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "]") {
              p14m2 = Number(weft[i].p12);
            } else if (p13r2 === "[" && p14r2 === "") {
              p14m2 = Number(weft[i].p13);
            } else if (p13r2 === "[" && p14r2 === "]") {
              p14m2 = Number(weft[i].p13);
            } else if (weft[i].p14 !== "") {
              p14m2 = Number(weft[i].p14);
            }


            // for p15

            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
              p15m2 = Number(weft[i].p1);
            } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
              p15m2 = Number(weft[i].p1);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
              p15m2 = Number(weft[i].p2);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
              p15m2 = Number(weft[i].p2);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
              p15m2 = Number(weft[i].p3);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
              p15m2 = Number(weft[i].p3);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
              p15m2 = Number(weft[i].p4);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
              p15m2 = Number(weft[i].p4);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
              p15m2 = Number(weft[i].p5);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
              p15m2 = Number(weft[i].p5);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
              p15m2 = Number(weft[i].p6);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
              p15m2 = Number(weft[i].p6);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
              p15m2 = Number(weft[i].p7);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
              p15m2 = Number(weft[i].p7);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
              p15m2 = Number(weft[i].p8);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
              p15m2 = Number(weft[i].p8);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
              p15m2 = Number(weft[i].p9);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
              p15m2 = Number(weft[i].p9);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
              p15m2 = Number(weft[i].p10);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
              p15m2 = Number(weft[i].p10);
            } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
              p15m2 = Number(weft[i].p11);
            } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
              p15m2 = Number(weft[i].p11);
            } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "") {
              p15m2 = Number(weft[i].p12);
            } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "]") {
              p15m2 = Number(weft[i].p12);
            } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "") {
              p15m2 = Number(weft[i].p13);
            } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "]") {
              p15m2 = Number(weft[i].p13);
            } else if (p14r2 === "[" && p15r2 === "") {
              p15m2 = Number(weft[i].p14);
            } else if (p14r2 === "[" && p15r2 === "]") {
              p15m2 = Number(weft[i].p14);
            } else if (weft[i].p15 !== "") {
              p15m2 = Number(weft[i].p15);
            }

            // for p16

            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
              p16m2 = Number(weft[i].p1);
            } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
              p16m2 = Number(weft[i].p1);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
              p16m2 = Number(weft[i].p2);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
              p16m2 = Number(weft[i].p2);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
              p16m2 = Number(weft[i].p3);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
              p16m2 = Number(weft[i].p3);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
              p16m2 = Number(weft[i].p4);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
              p16m2 = Number(weft[i].p4);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
              p16m2 = Number(weft[i].p5);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
              p16m2 = Number(weft[i].p5);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
              p16m2 = Number(weft[i].p6);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
              p16m2 = Number(weft[i].p6);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
              p16m2 = Number(weft[i].p7);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
              p16m2 = Number(weft[i].p7);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
              p16m2 = Number(weft[i].p8);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
              p16m2 = Number(weft[i].p8);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
              p16m2 = Number(weft[i].p9);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
              p16m2 = Number(weft[i].p9);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
              p16m2 = Number(weft[i].p10);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
              p16m2 = Number(weft[i].p10);
            } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
              p16m2 = Number(weft[i].p11);
            } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
              p16m2 = Number(weft[i].p11);
            } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
              p16m2 = Number(weft[i].p12);
            } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
              p16m2 = Number(weft[i].p12);
            } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "") {
              p16m2 = Number(weft[i].p13);
            } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "]") {
              p16m2 = Number(weft[i].p13);
            } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "") {
              p16m2 = Number(weft[i].p14);
            } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "]") {
              p16m2 = Number(weft[i].p14);
            } else if (p15r2 === "[" && p16r2 === "") {
              p16m2 = Number(weft[i].p15);
            } else if (p15r2 === "[" && p16r2 === "]") {
              p16m2 = Number(weft[i].p15);
            } else if (weft[i].p16 !== "") {
              p16m2 = Number(weft[i].p16);
            }


            // for p17

            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
              p17m2 = Number(weft[i].p1);
            } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
              p17m2 = Number(weft[i].p1);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
              p17m2 = Number(weft[i].p2);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
              p17m2 = Number(weft[i].p2);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
              p17m2 = Number(weft[i].p3);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
              p17m2 = Number(weft[i].p3);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
              p17m2 = Number(weft[i].p4);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
              p17m2 = Number(weft[i].p4);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
              p17m2 = Number(weft[i].p5);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
              p17m2 = Number(weft[i].p5);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
              p17m2 = Number(weft[i].p6);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
              p17m2 = Number(weft[i].p6);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
              p17m2 = Number(weft[i].p7);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
              p17m2 = Number(weft[i].p7);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
              p17m2 = Number(weft[i].p8);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
              p17m2 = Number(weft[i].p8);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
              p17m2 = Number(weft[i].p9);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
              p17m2 = Number(weft[i].p9);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
              p17m2 = Number(weft[i].p10);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
              p17m2 = Number(weft[i].p10);
            } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
              p17m2 = Number(weft[i].p11);
            } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
              p17m2 = Number(weft[i].p11);
            } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
              p17m2 = Number(weft[i].p12);
            } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
              p17m2 = Number(weft[i].p12);
            } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
              p17m2 = Number(weft[i].p13);
            } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
              p17m2 = Number(weft[i].p13);
            } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "") {
              p17m2 = Number(weft[i].p14);
            } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "]") {
              p17m2 = Number(weft[i].p14);
            } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "") {
              p17m2 = Number(weft[i].p15);
            } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "]") {
              p17m2 = Number(weft[i].p15);
            } else if (p16r2 === "[" && p17r2 === "") {
              p17m2 = Number(weft[i].p16);
            } else if (p16r2 === "[" && p17r2 === "]") {
              p17m2 = Number(weft[i].p16);
            } else if (weft[i].p17 !== "") {
              p17m2 = Number(weft[i].p17);
            }



            // for p18

            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
              p18m2 = Number(weft[i].p1);
            } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
              p18m2 = Number(weft[i].p1);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
              p18m2 = Number(weft[i].p2);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
              p18m2 = Number(weft[i].p2);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
              p18m2 = Number(weft[i].p3);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
              p18m2 = Number(weft[i].p3);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
              p18m2 = Number(weft[i].p4);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
              p18m2 = Number(weft[i].p4);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
              p18m2 = Number(weft[i].p5);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
              p18m2 = Number(weft[i].p5);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
              p18m2 = Number(weft[i].p6);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
              p18m2 = Number(weft[i].p6);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
              p18m2 = Number(weft[i].p7);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
              p18m2 = Number(weft[i].p7);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
              p18m2 = Number(weft[i].p8);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
              p18m2 = Number(weft[i].p8);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
              p18m2 = Number(weft[i].p9);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
              p18m2 = Number(weft[i].p9);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
              p18m2 = Number(weft[i].p10);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
              p18m2 = Number(weft[i].p10);
            } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
              p18m2 = Number(weft[i].p11);
            } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
              p18m2 = Number(weft[i].p11);
            } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
              p18m2 = Number(weft[i].p12);
            } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
              p18m2 = Number(weft[i].p12);
            } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
              p18m2 = Number(weft[i].p13);
            } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
              p18m2 = Number(weft[i].p13);
            } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
              p18m2 = Number(weft[i].p14);
            } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
              p18m2 = Number(weft[i].p14);
            } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "") {
              p18m2 = Number(weft[i].p15);
            } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "]") {
              p18m2 = Number(weft[i].p15);
            } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "") {
              p18m2 = Number(weft[i].p16);
            } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "]") {
              p18m2 = Number(weft[i].p16);
            } else if (p17r2 === "[" && p18r2 === "") {
              p18m2 = Number(weft[i].p17);
            } else if (p17r2 === "[" && p18r2 === "]") {
              p18m2 = Number(weft[i].p17);
            } else if (weft[i].p18 !== "") {
              p18m2 = Number(weft[i].p18);
            }


            // for p19


            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p1);
            } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p1);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p2);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p2);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p3);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p3);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p4);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p4);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p5);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p5);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p6);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p6);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p7);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p7);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p8);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p8);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p9);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p9);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p10);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p10);
            } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p11);
            } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p11);
            } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p12);
            } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p12);
            } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p13);
            } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p13);
            } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p14);
            } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p14);
            } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p15);
            } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p15);
            } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p16);
            } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p16);
            } else if (p17r2 === "[" && p18r2 === "" && p19r2 === "") {
              p19m2 = Number(weft[i].p17);
            } else if (p17r2 === "[" && p18r2 === "" && p19r2 === "]") {
              p19m2 = Number(weft[i].p17);
            } else if (p18r2 === "[" && p19r2 === "") {
              p19m2 = Number(weft[i].p18);
            } else if (p18r2 === "[" && p19r2 === "]") {
              p19m2 = Number(weft[i].p18);
            } else if (weft[i].p19 !== "") {
              p19m2 = Number(weft[i].p19);
            }


            // for p20

            if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p1);
            } else if (p1r2 === "[" && p2r2 === "" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p1);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p2);
            } else if (p2r2 === "[" && p3r2 === "" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p2);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p3);
            } else if (p3r2 === "[" && p4r2 === "" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p3);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p4);
            } else if (p4r2 === "[" && p5r2 === "" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p4);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p5);
            } else if (p5r2 === "[" && p6r2 === "" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p5);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p6);
            } else if (p6r2 === "[" && p7r2 === "" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p6);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p7);
            } else if (p7r2 === "[" && p8r2 === "" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p7);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p8);
            } else if (p8r2 === "[" && p9r2 === "" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p8);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p9);
            } else if (p9r2 === "[" && p10r2 === "" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p9);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p10);
            } else if (p10r2 === "[" && p11r2 === "" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p10);
            } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p11);
            } else if (p11r2 === "[" && p12r2 === "" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p11);
            } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p12);
            } else if (p12r2 === "[" && p13r2 === "" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p12);
            } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p13);
            } else if (p13r2 === "[" && p14r2 === "" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p13);
            } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p14);
            } else if (p14r2 === "[" && p15r2 === "" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p14);
            } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p15);
            } else if (p15r2 === "[" && p16r2 === "" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p15);
            } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p16);
            } else if (p16r2 === "[" && p17r2 === "" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p16);
            } else if (p17r2 === "[" && p18r2 === "" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p17);
            } else if (p17r2 === "[" && p18r2 === "" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p17);
            } else if (p18r2 === "[" && p19r2 === "" && p20r2 === "") {
              p20m2 = Number(weft[i].p18);
            } else if (p18r2 === "[" && p19r2 === "" && p20r2 === "]") {
              p20m2 = Number(weft[i].p18);
            } else if (p19r2 === "[" && p20r2 === "") {
              p20m2 = Number(weft[i].p19);
            } else if (p19r2 === "[" && p20r2 === "]") {
              p20m2 = Number(weft[i].p19);
            } else if (weft[i].p20 !== "") {
              p20m2 = Number(weft[i].p20);
            }
          }
          else if (weft[i].RepeatMultiplier != "R1" && weft[i].RepeatMultiplier != "M1" && weft[i].RepeatMultiplier != "R2" && weft[i].RepeatMultiplier != "M2") {


            var total = 0;
            if (weft[i].p1 != "") {
              var P1 = p1m1 + p1m2;
              if (P1 === 0) {
                total = total + (Number(weft[i].p1));
              }
              else {

                if (p1m1 > 0 && p1m2 > 0) {
                  var a = (Number(weft[i].p1) * p1m1);
                  var b = a * p1m2;

                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p1) * P1);
                }

              }

            }
            if (weft[i].p2 != "") {
              var P2 = p2m1 + p2m2;
              if (P2 === 0) {
                total = total + (Number(weft[i].p2));
              }
              else {
                if (p2m1 > 0 && p2m2 > 0) {
                  var a = (Number(weft[i].p2) * p2m1);
                  var b = a * p2m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p2) * P2);
                }
              }

            }
            if (weft[i].p3 != "") {
              var P3 = p3m1 + p3m2;
              if (P3 === 0) {
                total = total + (Number(weft[i].p3));
              }
              else {
                if (p3m1 > 0 && p3m2 > 0) {
                  var a = (Number(weft[i].p3) * p3m1);
                  var b = a * p3m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p3) * P3);
                }
              }

            }
            if (weft[i].p4 != "") {
              var P4 = p4m1 + p4m2;
              if (P4 === 0) {
                total = total + (Number(weft[i].p4));
              }
              else {
                if (p4m1 > 0 && p4m2 > 0) {
                  var a = (Number(weft[i].p4) * p4m1);
                  var b = a * p4m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p4) * P4);
                }
              }

            }
            if (weft[i].p5 != "") {

              var P5 = p5m1 + p5m2;
              if (P5 === 0) {
                total = total + (Number(weft[i].p5));
              }
              else {
                if (p5m1 > 0 && p5m2 > 0) {
                  var a = (Number(weft[i].p5) * p5m1);
                  var b = a * p5m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p5) * P5);
                }
              }

            }
            if (weft[i].p6 != "") {
              var P6 = p6m1 + p6m2;
              if (P6 === 0) {
                total = total + (Number(weft[i].p6));
              }
              else {
                if (p6m1 > 0 && p6m2 > 0) {
                  var a = (Number(weft[i].p6) * p6m1);
                  var b = a * p6m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p6) * P6);
                }
              }

            }
            if (weft[i].p7 != "") {
              var P7 = p7m1 + p7m2;
              if (P7 === 0) {
                total = total + (Number(weft[i].p7));
              }
              else {
                if (p7m1 > 0 && p7m2 > 0) {
                  var a = (Number(weft[i].p7) * p7m1);
                  var b = a * p7m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p7) * P7);
                }
              }

            }
            if (weft[i].p8 != "") {
              var P8 = p8m1 + p8m2;
              if (P8 === 0) {
                total = total + (Number(weft[i].p8));
              }
              else {
                if (p8m1 > 0 && p8m2 > 0) {
                  var a = (Number(weft[i].p8) * p8m1);
                  var b = a * p8m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p8) * P8);
                }
              }
            }
            if (weft[i].p9 != "") {
              var P9 = p9m1 + p9m2;
              if (P9 === 0) {
                total = total + (Number(weft[i].p9));
              }
              else {
                if (p9m1 > 0 && p9m2 > 0) {
                  var a = (Number(weft[i].p9) * p9m1);
                  var b = a * p9m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p9) * P9);
                }
              }
            }
            if (weft[i].p10 != "") {
              var P10 = p10m1 + p10m2;
              if (P10 === 0) {
                total = total + (Number(weft[i].p10));
              }
              else {
                if (p10m1 > 0 && p10m2 > 0) {
                  var a = (Number(weft[i].p10) * p10m1);
                  var b = a * p10m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p10) * P10);
                }
              }
            }
            if (weft[i].p11 != "") {
              var P11 = p11m1 + p11m2;
              if (P11 === 0) {
                total = total + (Number(weft[i].p11));
              }
              else {
                if (p11m1 > 0 && p11m2 > 0) {
                  var a = (Number(weft[i].p11) * p11m1);
                  var b = a * p11m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p11) * P11);
                }
              }
            }
            if (weft[i].p12 != "") {
              var P12 = p12m1 + p12m2;
              if (P12 === 0) {
                total = total + (Number(weft[i].p12));
              }
              else {
                if (p12m1 > 0 && p12m2 > 0) {
                  var a = (Number(weft[i].p12) * p12m1);
                  var b = a * p12m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p12) * P12);
                }
              }
            }
            if (weft[i].p13 != "") {
              var P13 = p13m1 + p13m2;
              if (P13 === 0) {
                total = total + (Number(weft[i].p13));
              }
              else {
                if (p13m1 > 0 && p13m2 > 0) {
                  var a = (Number(weft[i].p13) * p13m1);
                  var b = a * p13m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p13) * P13);
                }
              }
            }
            if (weft[i].p14 != "") {
              var P14 = p14m1 + p14m2;
              if (P14 === 0) {
                total = total + (Number(weft[i].p14));
              }
              else {
                if (p14m1 > 0 && p14m2 > 0) {
                  var a = (Number(weft[i].p14) * p14m1);
                  var b = a * p14m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p14) * P14);
                }
              }
            }
            if (weft[i].p15 != "") {
              var P15 = p15m1 + p15m2;
              if (P15 === 0) {
                total = total + (Number(weft[i].p15));
              }
              else {
                if (p15m1 > 0 && p15m2 > 0) {
                  var a = (Number(weft[i].p15) * p15m1);
                  var b = a * p15m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p15) * P15);
                }
              }
            }
            if (weft[i].p16 != "") {
              var P16 = p16m1 + p16m2;
              if (P16 === 0) {
                total = total + (Number(weft[i].p16));
              }
              else {
                if (p16m1 > 0 && p16m2 > 0) {
                  var a = (Number(weft[i].p16) * p16m1);
                  var b = a * p16m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p16) * P16);
                }
              }
            }
            if (weft[i].p17 != "") {
              var P17 = p17m1 + p17m2;
              if (P17 === 0) {
                total = total + (Number(weft[i].p17));
              }
              else {
                if (p17m1 > 0 && p17m2 > 0) {
                  var a = (Number(weft[i].p17) * p17m1);
                  var b = a * p17m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p17) * P17);
                }
              }
            }
            if (weft[i].p18 != "") {
              var P18 = p18m1 + p18m2;
              if (P18 === 0) {
                total = total + (Number(weft[i].p18));
              }
              else {
                if (p18m1 > 0 && p18m2 > 0) {
                  var a = (Number(weft[i].p18) * p18m1);
                  var b = a * p18m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p18) * P18);
                }
              }
            }
            if (weft[i].p19 != "") {
              var P19 = p19m1 + p19m2;
              if (P19 === 0) {
                total = total + (Number(weft[i].p19));
              }
              else {
                if (p19m1 > 0 && p19m2 > 0) {
                  var a = (Number(weft[i].p19) * p19m1);
                  var b = a * p19m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p19) * P19);
                }
              }
            }
            if (weft[i].p20 != "") {
              var P20 = p20m1 + p20m2;
              if (P20 === 0) {
                total = total + (Number(weft[i].p20));
              }
              else {
                if (p20m1 > 0 && p20m2 > 0) {
                  var a = (Number(weft[i].p20) * p20m1);
                  var b = a * p20m2;
                  total = total + b;
                }
                else {
                  total = total + (Number(weft[i].p20) * P20);
                }
              }
            }
            weft[i].PicksPerRepeat = total;
          }










          var obj1 = {

            YarnQuality: weft[i].YarnQuality,
            YarnDescrption: weft[i].YarnDescrption,
            ResultantCout: weft[i].ResultantCout,
            PicksPerRepeat: weft[i].PicksPerRepeat === undefined ? "0" : String(weft[i].PicksPerRepeat),
            WtperMeter: weft[i].WtperMeter,
            RepeatMultiplier: weft[i].RepeatMultiplier,
            p1: weft[i].p1,
            p2: weft[i].p2,
            p3: weft[i].p3,
            p4: weft[i].p4,
            p5: weft[i].p5,
            p6: weft[i].p6,
            p7: weft[i].p7,
            p8: weft[i].p8,
            p9: weft[i].p9,
            p10: weft[i].p10,
            p11: weft[i].p11,
            p12: weft[i].p12,
            p13: weft[i].p13,
            p14: weft[i].p14,
            p15: weft[i].p15,
            p16: weft[i].p16,
            p17: weft[i].p17,
            p18: weft[i].p18,
            p19: weft[i].p19,
            p20: weft[i].p20
          }
          aTableArr1.push(obj1);
          TableModel.setProperty("/aTableData2", aTableArr1)

        }

        this.onformulaw();
      },
      onformulaw: function () {
        var weft = this.getView().getModel("oTableDataModel2").getProperty("/aTableData2");
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel2");
        this.getView().getModel("oTableDataModel2").setProperty("/aTableData2", []);
        var TableModel = this.getView().getModel("oTableDataModel2");
        var aTableArr1 = TableModel.getProperty("/aTableData2")
        var aTablearr1 = [];
        var Picksperrepeat = 0;
        for (var i = 0; i < weft.length; i++) {
          if (weft[i].RepeatMultiplier === "R1" && weft[i].RepeatMultiplier === "M1" && weft[i].RepeatMultiplier === "R2" && weft[i].RepeatMultiplier === "M2") {
          }
          else if (weft[i].RepeatMultiplier != "R1" && weft[i].RepeatMultiplier != "M1" && weft[i].RepeatMultiplier != "R2" && weft[i].RepeatMultiplier != "M2") {
            Picksperrepeat = Picksperrepeat + Number(weft[i].PicksPerRepeat);
          }
        }


        var Picks = Number(this.getView().byId("Picks").getValue());
        var reedspace = Number(this.getView().byId("reeds").getValue());



        for (var i = 0; i < weft.length; i++) {
          if (weft[i].RepeatMultiplier === "R1" || weft[i].RepeatMultiplier === "M1" || weft[i].RepeatMultiplier === "R2" || weft[i].RepeatMultiplier === "M2") {

          }
          else if (weft[i].RepeatMultiplier != "R1" && weft[i].RepeatMultiplier != "M1" && weft[i].RepeatMultiplier != "R1" && weft[i].RepeatMultiplier != "M2") {


            var res = Number(weft[i].ResultantCout);
            var PPRt = weft[i].PicksPerRepeat / Picksperrepeat;
            var pick = Picks * PPRt;
            var a = pick * reedspace;
            var b = a / res;
            var c = b * 0.06;
            var d = c * 10;
            weft[i].WtperMeter = parseFloat(d).toFixed(3)

          }


          var obj1 = {

            YarnQuality: weft[i].YarnQuality,
            YarnDescrption: weft[i].YarnDescrption,
            ResultantCout: weft[i].ResultantCout,
            PicksPerRepeat: weft[i].PicksPerRepeat,
            WtperMeter: weft[i].WtperMeter,
            RepeatMultiplier: weft[i].RepeatMultiplier,
            p1: weft[i].p1,
            p2: weft[i].p2,
            p3: weft[i].p3,
            p4: weft[i].p4,
            p5: weft[i].p5,
            p6: weft[i].p6,
            p7: weft[i].p7,
            p8: weft[i].p8,
            p9: weft[i].p9,
            p10: weft[i].p10,
            p11: weft[i].p11,
            p12: weft[i].p12,
            p13: weft[i].p13,
            p14: weft[i].p14,
            p15: weft[i].p15,
            p16: weft[i].p16,
            p17: weft[i].p17,
            p18: weft[i].p18,
            p19: weft[i].p19,
            p20: weft[i].p20
          }
          aTableArr1.push(obj1);
          TableModel.setProperty("/aTableData2", aTableArr1)

        }
        var wtpermetertotal = 0;
        var weft = this.getView().getModel("oTableDataModel2").getProperty("/aTableData2");
        for (var j = 0; j < weft.length; j++) {
          wtpermetertotal = wtpermetertotal + Number(weft[j].WtperMeter);
        }
        wtpermetertotal = parseFloat(wtpermetertotal).toFixed(3);
        var oInput1 = this.getView().byId("IDweftwtmtr");
        oInput1.setValue(wtpermetertotal);
        var warptot = this.getView().byId("IDwarp").getValue();
        if (warptot != "") {
          var total = Number(wtpermetertotal) + Number(warptot);
          total = parseFloat(total).toFixed(3);
          var oInput = this.getView().byId("IDTOtwtmtr");
          oInput.setValue(total);

        }

      },
      onformulatotends: function () {
        var oBusyDialog = new sap.m.BusyDialog({
          title: "Fetching Data",
          text: "Please wait ..."
        });
        oBusyDialog.open();
        var plant = this.getView().byId("plant").getValue();
        if (plant != "2100") {
          var EPI = Number(this.getView().byId("EPI").getValue());
          var reedspace = Number(this.getView().byId("reeds").getValue());
          var totalends = EPI * reedspace;
          var oInput1 = this.getView().byId("Idtotend");
          totalends = parseFloat(totalends).toFixed(0)
          oInput1.setValue(totalends);
        }
        else {
          var bodend = Number(this.getView().byId("bodend").getValue());
          var selend = Number(this.getView().byId("selend").getValue());
          var totalends = bodend + selend;
          var oInput1 = this.getView().byId("Idtotend");
          totalends = parseFloat(totalends).toFixed(0)
          oInput1.setValue(totalends);
        }
        oBusyDialog.close();
      },
      onselveformula: function (oEvent) {
        var plant = this.getView().byId("plant").getValue();
        if (plant != "2100") {
          var oContext = oEvent.getSource().getBindingContext('oTableDataModel5').getObject();
          var Dent = Number(oContext.Dent);
          if (oContext.Ends === "") {
            var Ends = 1;
          }
          else {
            var Ends = Number(oContext.Ends);
          }
          if (oContext.Multiplier === "") {
            var Multiplier = 1;
          }
          else {
            var Multiplier = Number(oContext.Multiplier);
          }


          var totends = Dent * Ends * Multiplier;
          totends = parseFloat(totends).toFixed(3);

          var ResultantCount = Number(oContext.ResultantCount);

          // var slevendss = Number(oContext.Ends);
          var slevendss = Number(this.getView().byId("selend").getValue());
          var a = (slevendss * 0.64) / ResultantCount;
          a = parseFloat(a).toFixed(3);
          oEvent.getSource().getBindingContext("oTableDataModel5").getObject().WtPerMeter = a
          oEvent.getSource().getBindingContext("oTableDataModel5").getObject().TotalEnds = totends
        }
        else {
          this.getView().setModel(new sap.ui.model.json.JSONModel(), "selvedge");
          this.getView().getModel("selvedge").setProperty("/totends", true);
          var oContext = oEvent.getSource().getBindingContext('oTableDataModel5').getObject();
          var totends = oContext.TotalEnds;
          if (totends != "") {
            totends = Number(oContext.TotalEnds);
            var count = Number(oContext.ResultantCount);
            var a = (totends * 0.64) / count;
            a = parseFloat(a).toFixed(3);
            oEvent.getSource().getBindingContext("oTableDataModel5").getObject().WtPerMeter = a

          }
        }

        this.onslevedge();
      },
      onslevedge: function () {
        var plant = this.getView().byId("plant").getValue();
        if (plant != "2100") {
          var selvedge = this.getView().getModel("oTableDataModel5").getProperty("/aTableData5");
          var totalends = 0;
          for (var i = 0; i < selvedge.length; i++) {
            totalends = totalends + Number(selvedge[i].TotalEnds)
          }
          totalends = parseFloat(totalends).toFixed(0);
          var oInput = this.getView().byId("selend");
          oInput.setValue(totalends);
          var totend = this.getView().byId("Idtotend").getValue();
          if (totend != "") {
            var total = Number(totend) - Number(totalends);
            total = String(total);
            var oInput = this.getView().byId("bodend");
            total = parseFloat(total).toFixed(0)
            oInput.setValue(total);

          }
        }
        else {
          var selvedge = this.getView().getModel("oTableDataModel5").getProperty("/aTableData5");
          var totalends = 0;
          for (var i = 0; i < selvedge.length; i++) {
            totalends = totalends + Number(selvedge[i].TotalEnds)
          }
          totalends = totalends * 2;
          totalends = parseFloat(totalends).toFixed(0);
          var oInput = this.getView().byId("selend");
          oInput.setValue(totalends);

          var reedspace = Number(this.getView().byId("reeds").getValue());
          var reed = Number(this.getView().byId("reed").getValue());
          var dent = Number(this.getView().byId("dent").getValue());

          var totaldent = 0;
          for (var i = 0; i < selvedge.length; i++) {
            totaldent = totaldent + Number(selvedge[i].Dent)
          }
          var a = (reed / 2) * reedspace;
          var b = a - (totaldent * 2);
          var total = b * dent;

          var oInput = this.getView().byId("bodend");
          total = parseFloat(total).toFixed(0)
          oInput.setValue(total);


        }
      },
      ONEPI: function () {
        var oBusyDialog = new sap.m.BusyDialog({
          title: "Fetching Data",
          text: "Please wait ..."
        });
        oBusyDialog.open();
        var oInput = this.getView().byId("EPI");
        oInput.setValue("");
        var reed = Number(this.getView().byId("reed").getValue());
        var dent = Number(this.getView().byId("dent").getValue());

        var mul = dent / 2;
        var mul1 = mul * reed;
        var mul2 = (mul1).toFixed(2);
        var oInput = this.getView().byId("EPI");
        oInput.setValue(mul2);
        oBusyDialog.close();

      },
      onwarptableDelete: function (oEvent) {
        var oCommonModel = this.getOwnerComponent().getModel('oCommonModel');
        var Action = oCommonModel.getProperty('/displayObject').Action;
        var oBusyDialog = new sap.m.BusyDialog({
          title: "Deleting Record",
          text: "Please wait ..."
        });

        var oModel = this.getView().getModel();
        var oTable = oEvent.getSource().getParent().getParent();
        var oTableModel = this.getView().getModel('oTableDataModel1');
        var aTableArr = oTableModel.getProperty("/aTableData1");
        var aSelectedIndex = oTable.getSelectedIndices();
        var aNewArray = [];
        var tb = this.getView().byId("idwarppaterntable");
        var rowid = tb.getSelectedIndices();
        // var data = aTableArr[rowid];
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel");
        this.getView().getModel("oTableDataModel").setProperty("/aTableData", []);
        var tabl1 = this.getView().getModel("oTableDataModel1").getProperty("/aTableData1");
        var TableModel1 = this.getView().getModel("oTableDataModel1");
        var aTableArr1 = TableModel1.getProperty("/aTableData1")
        var ZPNO = this.getView().byId("masc").getValue();
        var TableModel = this.getView().getModel("oTableDataModel");
        var aTableArr = TableModel.getProperty("/aTableData")
        var aTablearr = [];
        for (var i = 0; i < tabl1.length; i++) {
          var items1 =
          {
            Zpno: ZPNO,
            Zpmsno: i + 1,
            Pattern: "1",
            Zpmtype: "",
            Rescnt: tabl1[i].ResultantCout,
            Zpmyqlty: tabl1[i].YarnQuality,
            Maktx: tabl1[i].YarnDescrption,
            Rep: tabl1[i].RepeatMultiplier,
            Ends: tabl1[i].endsPerRepeat,
            Wpmtr: tabl1[i].WtperMeter,
            P1: tabl1[i].p1,
            P2: tabl1[i].p2,
            P3: tabl1[i].p3,
            P4: tabl1[i].p4,
            P5: tabl1[i].p5,
            P6: tabl1[i].p6,
            P7: tabl1[i].p7,
            P8: tabl1[i].p8,
            P9: tabl1[i].p9,
            P10: tabl1[i].p10,
            P11: tabl1[i].p11,
            P12: tabl1[i].p12,
            P13: tabl1[i].p13,
            P14: tabl1[i].p14,
            P15: tabl1[i].p15,
            P16: tabl1[i].p16,
            P17: tabl1[i].p17,
            P18: tabl1[i].p18,
            P19: tabl1[i].p19,
            P20: tabl1[i].p20
          }
          aTableArr.push(items1);
          TableModel.setProperty("/aTableData", aTableArr)
        }
        var tabl2 = this.getView().getModel("oTableDataModel").getProperty("/aTableData");
        if (rowid.length === 1) {
          MessageBox.alert("Would you like to delete the selected lines?", {
            onClose: function (oAction) {
              if (oAction === MessageBox.Action.OK) {
                oBusyDialog.open();
                var zpno = String(tabl2[rowid].Zpno);
                var zpmsno = String(tabl2[rowid].Zpmsno);
                var patern = String(tabl2[rowid].Pattern);
                oModel.remove("/zpc_warppattern(Zpno='" + zpno + "',Zpmsno='" + zpmsno + "',Pattern='" + patern + "',Grp='" + patern + "')", {
                  method: "DELETE",
                  success: function (data) {
                    oBusyDialog.close();


                    // var oTable = oEvent.getSource().getParent().getParent();
                    // var aSelectedIndex = oTable.getSelectedIndices();
                    // var oTableModel = this.getView().getModel("oTableItemModel");
                    // var aTableArr = oTableModel.getProperty("/aTableItem");
                    var id = "";
                    var path = ""
                    var idx = ""

                    for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                      id = aSelectedIndex[i]
                      path = oTable.getContextByIndex(id).sPath;
                      idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                      aTableArr1.splice(idx, 1)
                    }


                    TableModel1.setProperty("/aTableData1", aTableArr1);
                  },
                  error: function (e) {
                    oBusyDialog.close();
                    // for (var i = 0; i < aSelectedIndex.length; i++) {
                    //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                    //   // aTableArr.splice(aSelectedIndex[i],1);
                    // }

                    // aNewArray.map(function (item) {
                    //   var FaultCode = item.Rescnt;
                    //   var iIndex = "";
                    //   aTableArr1.map(function (item, index) {
                    //     if (FaultCode === item.ResultantCout) {
                    //       iIndex = index
                    //     }
                    //   });
                    //   aTableArr1.splice(iIndex, 1);
                    // }.bind(this));



                    // TableModel1.setProperty("/aTableData1", aTableArr1);
                    var id = "";
                    var path = ""
                    var idx = ""

                    for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                      id = aSelectedIndex[i]
                      path = oTable.getContextByIndex(id).sPath;
                      idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                      aTableArr1.splice(idx, 1)
                    }


                    TableModel1.setProperty("/aTableData1", aTableArr1);
                  }
                });
              }
            }
          })
        }

        if (rowid.length > 1) {
          var oBusyDialog = new sap.m.BusyDialog({
            title: "Deleting Records",
            text: "Please wait ..."
          });
          MessageBox.alert("Would you like to delete the selected lines?", {
            onClose: function (oAction) {
              if (oAction === MessageBox.Action.OK) {
                for (var i = 0; i <= rowid.length; i++) {
                  oBusyDialog.open();
                  var zpno = String(tabl2[rowid[i]].Zpno);
                  var zpmsno = String(tabl2[rowid[i]].Zpmsno);
                  var patern = String(tabl2[rowid[i]].Pattern);
                  oModel.remove("/zpc_warppattern(Zpno='" + zpno + "',Zpmsno='" + zpmsno + "',Pattern='" + patern + "',Grp='" + patern + "')", {
                    method: "DELETE",
                    success: function (data) {
                      oBusyDialog.close();

                      // for (var i = 0; i < aSelectedIndex.length; i++) {
                      //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                      //   // aTableArr.splice(aSelectedIndex[i],1);
                      // }

                      // aNewArray.map(function (item) {
                      //   var FaultCode = item.Rescnt;
                      //   var iIndex = "";
                      //   aTableArr1.map(function (item, index) {
                      //     if (FaultCode === item.ResultantCout) {
                      //       iIndex = index
                      //     }
                      //   });
                      //   aTableArr1.splice(iIndex, 1);
                      // }.bind(this));


                      // TableModel1.setProperty("/aTableData1", aTableArr1);
                      var id = "";
                      var path = ""
                      var idx = ""

                      for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                        id = aSelectedIndex[i]
                        path = oTable.getContextByIndex(id).sPath;
                        idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                        aTableArr1.splice(idx, 1)
                      }


                      TableModel1.setProperty("/aTableData1", aTableArr1);
                    },
                    error: function (e) {
                      oBusyDialog.close();
                      // for (var i = 0; i < aSelectedIndex.length; i++) {
                      //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                      //   // aTableArr.splice(aSelectedIndex[i],1);
                      // }

                      // aNewArray.map(function (item) {
                      //   var FaultCode = item.Rescnt;
                      //   var iIndex = "";
                      //   aTableArr1.map(function (item, index) {
                      //     if (FaultCode === item.ResultantCout) {
                      //       iIndex = index
                      //     }
                      //   });
                      //   aTableArr1.splice(iIndex, 1);
                      // }.bind(this));


                      // TableModel1.setProperty("/aTableData1", aTableArr1);
                      var id = "";
                      var path = ""
                      var idx = ""

                      for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                        id = aSelectedIndex[i]
                        path = oTable.getContextByIndex(id).sPath;
                        idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                        aTableArr1.splice(idx, 1)
                      }


                      TableModel1.setProperty("/aTableData1", aTableArr1);
                    }
                  });
                }
              }
            }
          });

        }

      },
      onwefttableDelete: function (oEvent) {
        var oBusyDialog = new sap.m.BusyDialog({
          title: "Deleting Record",
          text: "Please wait ..."
        });

        var oModel = this.getView().getModel();
        var oTable = oEvent.getSource().getParent().getParent();
        var oTableModel = this.getView().getModel('oTableDataModel2');
        var aTableArr = oTableModel.getProperty("/aTableData2");
        var aSelectedIndex = oTable.getSelectedIndices();
        var aNewArray = [];
        var tb = this.getView().byId("idweftpaterntable");
        var rowid = tb.getSelectedIndices();
        // var data = aTableArr[rowid];
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel");
        this.getView().getModel("oTableDataModel").setProperty("/aTableData", []);
        var tabl1 = this.getView().getModel("oTableDataModel2").getProperty("/aTableData2");
        var TableModel1 = this.getView().getModel("oTableDataModel2");
        var aTableArr1 = TableModel1.getProperty("/aTableData2")
        var ZPNO = this.getView().byId("masc").getValue();
        var TableModel = this.getView().getModel("oTableDataModel");
        var aTableArr = TableModel.getProperty("/aTableData")
        var aTablearr = [];
        for (var i = 0; i < tabl1.length; i++) {
          var items1 =
          {
            Zpno: ZPNO,
            Zpmsno: i + 1,
            Pattern: "2",
            Zpmtype: "",
            Rescnt: tabl1[i].ResultantCout,
            Zpmyqlty: tabl1[i].YarnQuality,
            Maktx: tabl1[i].YarnDescrption,
            Rep: tabl1[i].RepeatMultiplier,
            Ends: tabl1[i].PicksPerRepeat,
            Wpmtr: tabl1[i].WtperMeter,
            P1: tabl1[i].p1,
            P2: tabl1[i].p2,
            P3: tabl1[i].p3,
            P4: tabl1[i].p4,
            P5: tabl1[i].p5,
            P6: tabl1[i].p6,
            P7: tabl1[i].p7,
            P8: tabl1[i].p8,
            P9: tabl1[i].p9,
            P10: tabl1[i].p10,
            P11: tabl1[i].p11,
            P12: tabl1[i].p12,
            P13: tabl1[i].p13,
            P14: tabl1[i].p14,
            P15: tabl1[i].p15,
            P16: tabl1[i].p16,
            P17: tabl1[i].p17,
            P18: tabl1[i].p18,
            P19: tabl1[i].p19,
            P20: tabl1[i].p20
          }
          aTableArr.push(items1);
          TableModel.setProperty("/aTableData", aTableArr)
        }
        var tabl2 = this.getView().getModel("oTableDataModel").getProperty("/aTableData");
        if (rowid.length === 1) {
          MessageBox.alert("Would you like to delete the selected lines?", {
            onClose: function (oAction) {
              if (oAction === MessageBox.Action.OK) {
                oBusyDialog.open();
                var zpno = String(tabl2[rowid].Zpno);
                var zpmsno = String(tabl2[rowid].Zpmsno);
                var patern = String(tabl2[rowid].Pattern);
                oModel.remove("/zpc_warppattern(Zpno='" + zpno + "',Zpmsno='" + zpmsno + "',Pattern='" + patern + "',Grp='" + patern + "')", {
                  method: "DELETE",
                  success: function (data) {
                    oBusyDialog.close();


                    // for (var i = 0; i < aSelectedIndex.length; i++) {
                    //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                    //   // aTableArr.splice(aSelectedIndex[i],1);
                    // }

                    // aNewArray.map(function (item) {
                    //   var FaultCode = item.Rescnt;
                    //   var iIndex = "";
                    //   aTableArr1.map(function (item, index) {
                    //     if (FaultCode === item.ResultantCout) {
                    //       iIndex = index
                    //     }
                    //   });
                    //   aTableArr1.splice(iIndex, 1);
                    // }.bind(this));


                    // TableModel1.setProperty("/aTableData2", aTableArr1);
                    var id = "";
                    var path = ""
                    var idx = ""

                    for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                      id = aSelectedIndex[i]
                      path = oTable.getContextByIndex(id).sPath;
                      idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                      aTableArr1.splice(idx, 1)
                    }


                    TableModel1.setProperty("/aTableData2", aTableArr1);
                  },
                  error: function (e) {
                    oBusyDialog.close();
                    // for (var i = 0; i < aSelectedIndex.length; i++) {
                    //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                    //   // aTableArr.splice(aSelectedIndex[i],1);
                    // }

                    // aNewArray.map(function (item) {
                    //   var FaultCode = item.Rescnt;
                    //   var iIndex = "";
                    //   aTableArr1.map(function (item, index) {
                    //     if (FaultCode === item.ResultantCout) {
                    //       iIndex = index
                    //     }
                    //   });
                    //   aTableArr1.splice(iIndex, 1);
                    // }.bind(this));



                    // TableModel1.setProperty("/aTableData2", aTableArr1);
                    var id = "";
                    var path = ""
                    var idx = ""

                    for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                      id = aSelectedIndex[i]
                      path = oTable.getContextByIndex(id).sPath;
                      idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                      aTableArr1.splice(idx, 1)
                    }


                    TableModel1.setProperty("/aTableData2", aTableArr1);
                  }
                });
              }
            }
          })
        }

        if (rowid.length > 1) {
          var oBusyDialog = new sap.m.BusyDialog({
            title: "Deleting Records",
            text: "Please wait ..."
          });
          MessageBox.alert("Would you like to delete the selected lines?", {
            onClose: function (oAction) {
              if (oAction === MessageBox.Action.OK) {
                for (var i = 0; i <= rowid.length; i++) {
                  oBusyDialog.open();
                  var zpno = String(tabl2[rowid[i]].Zpno);
                  var zpmsno = String(tabl2[rowid[i]].Zpmsno);
                  var patern = String(tabl2[rowid[i]].Pattern);
                  oModel.remove("/zpc_warppattern(Zpno='" + zpno + "',Zpmsno='" + zpmsno + "',Pattern='" + patern + "',Grp='" + patern + "')", {
                    method: "DELETE",
                    success: function (data) {
                      oBusyDialog.close();

                      // for (var i = 0; i < aSelectedIndex.length; i++) {
                      //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                      //   // aTableArr.splice(aSelectedIndex[i],1);
                      // }

                      // aNewArray.map(function (item) {
                      //   var FaultCode = item.Rescnt;
                      //   var iIndex = "";
                      //   aTableArr1.map(function (item, index) {
                      //     if (FaultCode === item.ResultantCout) {
                      //       iIndex = index
                      //     }
                      //   });
                      //   aTableArr1.splice(iIndex, 1);
                      // }.bind(this));


                      // TableModel1.setProperty("/aTableData2", aTableArr1);
                      var id = "";
                      var path = ""
                      var idx = ""

                      for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                        id = aSelectedIndex[i]
                        path = oTable.getContextByIndex(id).sPath;
                        idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                        aTableArr1.splice(idx, 1)
                      }


                      TableModel1.setProperty("/aTableData2", aTableArr1);

                    },
                    error: function (e) {
                      oBusyDialog.close();
                      // for (var i = 0; i < aSelectedIndex.length; i++) {
                      //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                      //   // aTableArr.splice(aSelectedIndex[i],1);
                      // }

                      // aNewArray.map(function (item) {
                      //   var FaultCode = item.Rescnt;
                      //   var iIndex = "";
                      //   aTableArr1.map(function (item, index) {
                      //     if (FaultCode === item.ResultantCout) {
                      //       iIndex = index
                      //     }
                      //   });
                      //   aTableArr1.splice(iIndex, 1);
                      // }.bind(this));


                      // TableModel1.setProperty("/aTableData2", aTableArr1);
                      var id = "";
                      var path = ""
                      var idx = ""

                      for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                        id = aSelectedIndex[i]
                        path = oTable.getContextByIndex(id).sPath;
                        idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                        aTableArr1.splice(idx, 1)
                      }


                      TableModel1.setProperty("/aTableData2", aTableArr1);
                    }
                  });
                }
              }
            }
          });

        }

      },
      ondrafttableDelete: function (oEvent) {
        var oBusyDialog = new sap.m.BusyDialog({
          title: "Deleting Record",
          text: "Please wait ..."
        });

        var oModel = this.getView().getModel();
        var oTable = oEvent.getSource().getParent().getParent();
        var oTableModel = this.getView().getModel('oTableDataModel3');
        var aTableArr = oTableModel.getProperty("/aTableData3");
        var aSelectedIndex = oTable.getSelectedIndices();
        var aNewArray = [];
        var tb = this.getView().byId("idtabledraft");
        var rowid = tb.getSelectedIndices();
        // var data = aTableArr[rowid];
        var ZPNO = this.getView().byId("masc").getValue();
        var draft = this.getView().getModel("oTableDataModel3").getProperty("/aTableData3");
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel");
        this.getView().getModel("oTableDataModel").setProperty("/aTableData", []);
        var TableModel = this.getView().getModel("oTableDataModel");
        var aTableArr = TableModel.getProperty("/aTableData")
        var oTableModel1 = this.getView().getModel('oTableDataModel3');
        var aTableArr1 = oTableModel1.getProperty("/aTableData3");


        for (var i = 0; i < draft.length; i++) {
          var pmsno = String(i + 1);
          var items1 = {
            Zpno: ZPNO,
            Pmgroup: "1",
            Ptype: "1",
            Zpmsno: pmsno,
            Pmdesc: draft[i].Description,
            Mul: draft[i].Multiplier,
            Repeats: draft[i].Repeats,
          }
          aTableArr.push(items1);
          TableModel.setProperty("/aTableData", aTableArr)
        }

        var tabl2 = this.getView().getModel("oTableDataModel").getProperty("/aTableData");
        if (rowid.length === 1) {
          MessageBox.alert("Would you like to delete the selected lines?", {
            onClose: function (oAction) {
              if (oAction === MessageBox.Action.OK) {
                oBusyDialog.open();
                var zpno = String(tabl2[rowid].Zpno);
                var zpmsno = String(tabl2[rowid].Zpmsno);
                var pmgroup = String(tabl2[rowid].Pmgroup);
                var Ptype = String(tabl2[rowid].Ptype);
                oModel.remove("/ZPC_DRAFTPEGPLAN(Zpno='" + zpno + "',Pmgroup='" + pmgroup + "',Ptype='" + Ptype + "',Zpmsno='" + zpmsno + "')", {
                  method: "DELETE",
                  success: function (data) {
                    oBusyDialog.close();


                    // for (var i = 0; i < aSelectedIndex.length; i++) {
                    //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                    //   // aTableArr.splice(aSelectedIndex[i],1);
                    // }

                    // aNewArray.map(function (item) {
                    //   var FaultCode = item.Rescnt;
                    //   var iIndex = "";
                    //   aTableArr1.map(function (item, index) {
                    //     if (FaultCode === item.ResultantCout) {
                    //       iIndex = index
                    //     }
                    //   });
                    //   aTableArr1.splice(iIndex, 1);
                    // }.bind(this));


                    // TableModel1.setProperty("/aTableData2", aTableArr1);
                    var id = "";
                    var path = ""
                    var idx = ""

                    for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                      id = aSelectedIndex[i]
                      path = oTable.getContextByIndex(id).sPath;
                      idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                      aTableArr1.splice(idx, 1)
                    }


                    oTableModel1.setProperty("/aTableData3", aTableArr1);
                  },
                  error: function (e) {
                    oBusyDialog.close();
                    // for (var i = 0; i < aSelectedIndex.length; i++) {
                    //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                    //   // aTableArr.splice(aSelectedIndex[i],1);
                    // }

                    // aNewArray.map(function (item) {
                    //   var FaultCode = item.Rescnt;
                    //   var iIndex = "";
                    //   aTableArr1.map(function (item, index) {
                    //     if (FaultCode === item.ResultantCout) {
                    //       iIndex = index
                    //     }
                    //   });
                    //   aTableArr1.splice(iIndex, 1);
                    // }.bind(this));



                    // TableModel1.setProperty("/aTableData2", aTableArr1);
                    var id = "";
                    var path = ""
                    var idx = ""

                    for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                      id = aSelectedIndex[i]
                      path = oTable.getContextByIndex(id).sPath;
                      idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                      aTableArr1.splice(idx, 1)
                    }


                    oTableModel1.setProperty("/aTableData3", aTableArr1);
                  }
                });
              }
            }
          })
        }

        if (rowid.length > 1) {
          var oBusyDialog = new sap.m.BusyDialog({
            title: "Deleting Records",
            text: "Please wait ..."
          });
          MessageBox.alert("Would you like to delete the selected lines?", {
            onClose: function (oAction) {
              if (oAction === MessageBox.Action.OK) {
                for (var i = 0; i <= rowid.length; i++) {
                  oBusyDialog.open();
                  var zpno = String(tabl2[rowid[i]].Zpno);
                  var zpmsno = String(tabl2[rowid[i]].Zpmsno);
                  var pmgroup = String(tabl2[rowid[i]].Pmgroup);
                  var Ptype = String(tabl2[rowid[i]].Ptype)
                  oModel.remove("/ZPC_DRAFTPEGPLAN(Zpno='" + zpno + "',Pmgroup='" + pmgroup + "',Ptype='" + Ptype + "',Zpmsno='" + zpmsno + "')", {
                    method: "DELETE",
                    success: function (data) {
                      oBusyDialog.close();

                      // for (var i = 0; i < aSelectedIndex.length; i++) {
                      //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                      //   // aTableArr.splice(aSelectedIndex[i],1);
                      // }

                      // aNewArray.map(function (item) {
                      //   var FaultCode = item.Rescnt;
                      //   var iIndex = "";
                      //   aTableArr1.map(function (item, index) {
                      //     if (FaultCode === item.ResultantCout) {
                      //       iIndex = index
                      //     }
                      //   });
                      //   aTableArr1.splice(iIndex, 1);
                      // }.bind(this));


                      // TableModel1.setProperty("/aTableData2", aTableArr1);
                      var id = "";
                      var path = ""
                      var idx = ""

                      for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                        id = aSelectedIndex[i]
                        path = oTable.getContextByIndex(id).sPath;
                        idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                        aTableArr1.splice(idx, 1)
                      }
                      oTableModel1.setProperty("/aTableData3", aTableArr1);

                    },
                    error: function (e) {
                      oBusyDialog.close();
                      // for (var i = 0; i < aSelectedIndex.length; i++) {
                      //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                      //   // aTableArr.splice(aSelectedIndex[i],1);
                      // }

                      // aNewArray.map(function (item) {
                      //   var FaultCode = item.Rescnt;
                      //   var iIndex = "";
                      //   aTableArr1.map(function (item, index) {
                      //     if (FaultCode === item.ResultantCout) {
                      //       iIndex = index
                      //     }
                      //   });
                      //   aTableArr1.splice(iIndex, 1);
                      // }.bind(this));


                      // TableModel1.setProperty("/aTableData2", aTableArr1);
                      var id = "";
                      var path = ""
                      var idx = ""

                      for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                        id = aSelectedIndex[i]
                        path = oTable.getContextByIndex(id).sPath;
                        idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                        aTableArr1.splice(idx, 1)
                      }
                      oTableModel1.setProperty("/aTableData3", aTableArr1);
                    }
                  });
                }
              }
            }
          });

        }

      },
      onpegtableDelete: function (oEvent) {
        var oBusyDialog = new sap.m.BusyDialog({
          title: "Deleting Record",
          text: "Please wait ..."
        });

        var oModel = this.getView().getModel();
        var oTable = oEvent.getSource().getParent().getParent();
        var oTableModel = this.getView().getModel('oTableDataModel4');
        var aTableArr = oTableModel.getProperty("/aTableData4");
        var aSelectedIndex = oTable.getSelectedIndices();
        var aNewArray = [];
        var tb = this.getView().byId("idtablepeg");
        var rowid = tb.getSelectedIndices();
        // var data = aTableArr[rowid];
        var ZPNO = this.getView().byId("masc").getValue();
        var draft = this.getView().getModel("oTableDataModel4").getProperty("/aTableData4");
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel");
        this.getView().getModel("oTableDataModel").setProperty("/aTableData", []);
        var TableModel = this.getView().getModel("oTableDataModel");
        var aTableArr = TableModel.getProperty("/aTableData")
        var oTableModel1 = this.getView().getModel('oTableDataModel4');
        var aTableArr1 = oTableModel1.getProperty("/aTableData4");


        for (var i = 0; i < draft.length; i++) {
          var pmsno = String(i + 1);
          var items1 = {
            Zpno: ZPNO,
            Pmgroup: "2",
            Ptype: "2",
            Zpmsno: pmsno,
            Pmdesc: draft[i].Description,
            Mul: draft[i].Multiplier,
            Repeats: draft[i].Repeats,
            Remark: draft[i].Remarks
          }
          aTableArr.push(items1);
          TableModel.setProperty("/aTableData", aTableArr)
        }

        var tabl2 = this.getView().getModel("oTableDataModel").getProperty("/aTableData");
        if (rowid.length === 1) {
          MessageBox.alert("Would you like to delete the selected lines?", {
            onClose: function (oAction) {
              if (oAction === MessageBox.Action.OK) {
                oBusyDialog.open();
                var zpno = String(tabl2[rowid].Zpno);
                var zpmsno = String(tabl2[rowid].Zpmsno);
                var pmgroup = String(tabl2[rowid].Pmgroup);
                var Ptype = String(tabl2[rowid].Ptype);
                oModel.remove("/ZPC_DRAFTPEGPLAN(Zpno='" + zpno + "',Pmgroup='" + pmgroup + "',Ptype='" + Ptype + "',Zpmsno='" + zpmsno + "')", {
                  method: "DELETE",
                  success: function (data) {
                    oBusyDialog.close();


                    // for (var i = 0; i < aSelectedIndex.length; i++) {
                    //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                    //   // aTableArr.splice(aSelectedIndex[i],1);
                    // }

                    // aNewArray.map(function (item) {
                    //   var FaultCode = item.Rescnt;
                    //   var iIndex = "";
                    //   aTableArr1.map(function (item, index) {
                    //     if (FaultCode === item.ResultantCout) {
                    //       iIndex = index
                    //     }
                    //   });
                    //   aTableArr1.splice(iIndex, 1);
                    // }.bind(this));


                    // TableModel1.setProperty("/aTableData2", aTableArr1);
                    var id = "";
                    var path = ""
                    var idx = ""

                    for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                      id = aSelectedIndex[i]
                      path = oTable.getContextByIndex(id).sPath;
                      idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                      aTableArr1.splice(idx, 1)
                    }


                    oTableModel1.setProperty("/aTableData4", aTableArr1);
                  },
                  error: function (e) {
                    oBusyDialog.close();
                    // for (var i = 0; i < aSelectedIndex.length; i++) {
                    //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                    //   // aTableArr.splice(aSelectedIndex[i],1);
                    // }

                    // aNewArray.map(function (item) {
                    //   var FaultCode = item.Rescnt;
                    //   var iIndex = "";
                    //   aTableArr1.map(function (item, index) {
                    //     if (FaultCode === item.ResultantCout) {
                    //       iIndex = index
                    //     }
                    //   });
                    //   aTableArr1.splice(iIndex, 1);
                    // }.bind(this));



                    // TableModel1.setProperty("/aTableData2", aTableArr1);
                    var id = "";
                    var path = ""
                    var idx = ""

                    for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                      id = aSelectedIndex[i]
                      path = oTable.getContextByIndex(id).sPath;
                      idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                      aTableArr1.splice(idx, 1)
                    }


                    oTableModel1.setProperty("/aTableData4", aTableArr1);
                  }
                });
              }
            }
          })
        }

        if (rowid.length > 1) {
          var oBusyDialog = new sap.m.BusyDialog({
            title: "Deleting Records",
            text: "Please wait ..."
          });
          MessageBox.alert("Would you like to delete the selected lines?", {
            onClose: function (oAction) {
              if (oAction === MessageBox.Action.OK) {
                for (var i = 0; i <= rowid.length; i++) {
                  oBusyDialog.open();
                  var zpno = String(tabl2[rowid[i]].Zpno);
                  var zpmsno = String(tabl2[rowid[i]].Zpmsno);
                  var pmgroup = String(tabl2[rowid[i]].Pmgroup);
                  var Ptype = String(tabl2[rowid[i]].Ptype)
                  oModel.remove("/ZPC_DRAFTPEGPLAN(Zpno='" + zpno + "',Pmgroup='" + pmgroup + "',Ptype='" + Ptype + "',Zpmsno='" + zpmsno + "')", {
                    method: "DELETE",
                    success: function (data) {
                      oBusyDialog.close();

                      // for (var i = 0; i < aSelectedIndex.length; i++) {
                      //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                      //   // aTableArr.splice(aSelectedIndex[i],1);
                      // }

                      // aNewArray.map(function (item) {
                      //   var FaultCode = item.Rescnt;
                      //   var iIndex = "";
                      //   aTableArr1.map(function (item, index) {
                      //     if (FaultCode === item.ResultantCout) {
                      //       iIndex = index
                      //     }
                      //   });
                      //   aTableArr1.splice(iIndex, 1);
                      // }.bind(this));


                      // TableModel1.setProperty("/aTableData2", aTableArr1);
                      var id = "";
                      var path = ""
                      var idx = ""

                      for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                        id = aSelectedIndex[i]
                        path = oTable.getContextByIndex(id).sPath;
                        idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                        aTableArr1.splice(idx, 1)
                      }
                      oTableModel1.setProperty("/aTableData4", aTableArr1);

                    },
                    error: function (e) {
                      oBusyDialog.close();
                      // for (var i = 0; i < aSelectedIndex.length; i++) {
                      //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                      //   // aTableArr.splice(aSelectedIndex[i],1);
                      // }

                      // aNewArray.map(function (item) {
                      //   var FaultCode = item.Rescnt;
                      //   var iIndex = "";
                      //   aTableArr1.map(function (item, index) {
                      //     if (FaultCode === item.ResultantCout) {
                      //       iIndex = index
                      //     }
                      //   });
                      //   aTableArr1.splice(iIndex, 1);
                      // }.bind(this));


                      // TableModel1.setProperty("/aTableData2", aTableArr1);
                      var id = "";
                      var path = ""
                      var idx = ""

                      for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                        id = aSelectedIndex[i]
                        path = oTable.getContextByIndex(id).sPath;
                        idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                        aTableArr1.splice(idx, 1)
                      }
                      oTableModel1.setProperty("/aTableData4", aTableArr1);
                    }
                  });
                }
              }
            }
          });

        }

      },
      onselvedgetableDelete: function (oEvent) {
        var oBusyDialog = new sap.m.BusyDialog({
          title: "Deleting Record",
          text: "Please wait ..."
        });

        var oModel = this.getView().getModel();
        var oTable = oEvent.getSource().getParent().getParent();
        var oTableModel = this.getView().getModel('oTableDataModel5');
        var aTableArr = oTableModel.getProperty("/aTableData5");
        var aSelectedIndex = oTable.getSelectedIndices();
        var aNewArray = [];
        var tb = this.getView().byId("idtableselv");
        var rowid = tb.getSelectedIndices();
        // var data = aTableArr[rowid];
        var ZPNO = this.getView().byId("masc").getValue();
        var selvedge = this.getView().getModel("oTableDataModel5").getProperty("/aTableData5");
        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel");
        this.getView().getModel("oTableDataModel").setProperty("/aTableData", []);
        var TableModel = this.getView().getModel("oTableDataModel");
        var aTableArr = TableModel.getProperty("/aTableData");
        var oTableModel1 = this.getView().getModel('oTableDataModel5');
        var aTableArr1 = oTableModel1.getProperty("/aTableData5");
        var aTablearr = [];

        for (var j = 0; j < selvedge.length; j++) {
          var pmsno = String(j + 1);
          var Rescnt = selvedge[j].ResultantCount;
          var ends = selvedge[j].WtPerMeter;
          if (Rescnt === "") {
            var rr = Rescnt;
            var endd = ends;
          }
          else {
            var rr = parseFloat(Rescnt).toFixed(3);
            var endd = parseFloat(ends).toFixed(3)
          }


          var data =
          {
            Zpno: ZPNO,
            Zpmsno: pmsno,
            Rescnt: selvedge[j].ResultantCount === " " ? "0.00" : parseFloat(selvedge[j].ResultantCount).toFixed(2),
            Zpmyqlty: selvedge[j].YarnQuality,
            Maktx: selvedge[j].YarnDesc,
            Shaft: selvedge[j].SelvedgeWeave,
            Dent: selvedge[j].Dent,
            Dent1: selvedge[j].Dent1,
            Ends: selvedge[j].Ends,
            Repeats: selvedge[j].Repeats,
            Mul: selvedge[j].Multiplier,
            Totalends: selvedge[j].TotalEnds,
            Pmdesc: selvedge[j].Description,
            Shades: selvedge[j].Shades,
            Wpmtr: selvedge[j].WtPerMeter === " " ? "0.00" : parseFloat(selvedge[j].WtperMeter).toFixed(2),
          }
          aTableArr.push(data);
          TableModel.setProperty("/aTableData", aTableArr)
        }

        var tabl2 = this.getView().getModel("oTableDataModel").getProperty("/aTableData");
        if (rowid.length === 1) {
          MessageBox.alert("Would you like to delete the selected lines?", {
            onClose: function (oAction) {
              if (oAction === MessageBox.Action.OK) {
                oBusyDialog.open();
                var zpno = String(tabl2[rowid].Zpno);
                var zpmsno = String(tabl2[rowid].Zpmsno);

                oModel.remove("/ZPC_SELVEDGE(Zpno='" + zpno + "',Zpmsno='" + zpmsno + "')", {
                  method: "DELETE",
                  success: function (data) {
                    oBusyDialog.close();


                    // for (var i = 0; i < aSelectedIndex.length; i++) {
                    //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                    //   // aTableArr.splice(aSelectedIndex[i],1);
                    // }

                    // aNewArray.map(function (item) {
                    //   var FaultCode = item.Rescnt;
                    //   var iIndex = "";
                    //   aTableArr1.map(function (item, index) {
                    //     if (FaultCode === item.ResultantCout) {
                    //       iIndex = index
                    //     }
                    //   });
                    //   aTableArr1.splice(iIndex, 1);
                    // }.bind(this));


                    // TableModel1.setProperty("/aTableData2", aTableArr1);
                    var id = "";
                    var path = ""
                    var idx = ""

                    for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                      id = aSelectedIndex[i]
                      path = oTable.getContextByIndex(id).sPath;
                      idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                      aTableArr1.splice(idx, 1)
                    }


                    oTableModel1.setProperty("/aTableData5", aTableArr1);
                  },
                  error: function (e) {
                    oBusyDialog.close();
                    // for (var i = 0; i < aSelectedIndex.length; i++) {
                    //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                    //   // aTableArr.splice(aSelectedIndex[i],1);
                    // }

                    // aNewArray.map(function (item) {
                    //   var FaultCode = item.Rescnt;
                    //   var iIndex = "";
                    //   aTableArr1.map(function (item, index) {
                    //     if (FaultCode === item.ResultantCout) {
                    //       iIndex = index
                    //     }
                    //   });
                    //   aTableArr1.splice(iIndex, 1);
                    // }.bind(this));



                    // TableModel1.setProperty("/aTableData2", aTableArr1);
                    var id = "";
                    var path = ""
                    var idx = ""

                    for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                      id = aSelectedIndex[i]
                      path = oTable.getContextByIndex(id).sPath;
                      idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                      aTableArr1.splice(idx, 1)
                    }


                    oTableModel1.setProperty("/aTableData5", aTableArr1);
                  }
                });
              }
            }
          })
        }

        if (rowid.length > 1) {
          var oBusyDialog = new sap.m.BusyDialog({
            title: "Deleting Records",
            text: "Please wait ..."
          });
          MessageBox.alert("Would you like to delete the selected lines?", {
            onClose: function (oAction) {
              if (oAction === MessageBox.Action.OK) {
                for (var i = 0; i <= rowid.length; i++) {
                  oBusyDialog.open();
                  var zpno = String(tabl2[rowid[i]].Zpno);
                  var zpmsno = String(tabl2[rowid[i]].Zpmsno);
                  oModel.remove("/ZPC_SELVEDGE(Zpno='" + zpno + "',Zpmsno='" + zpmsno + "')", {
                    method: "DELETE",
                    success: function (data) {
                      oBusyDialog.close();

                      // for (var i = 0; i < aSelectedIndex.length; i++) {
                      //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                      //   // aTableArr.splice(aSelectedIndex[i],1);
                      // }

                      // aNewArray.map(function (item) {
                      //   var FaultCode = item.Rescnt;
                      //   var iIndex = "";
                      //   aTableArr1.map(function (item, index) {
                      //     if (FaultCode === item.ResultantCout) {
                      //       iIndex = index
                      //     }
                      //   });
                      //   aTableArr1.splice(iIndex, 1);
                      // }.bind(this));


                      // TableModel1.setProperty("/aTableData2", aTableArr1);
                      var id = "";
                      var path = ""
                      var idx = ""

                      for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                        id = aSelectedIndex[i]
                        path = oTable.getContextByIndex(id).sPath;
                        idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                        aTableArr1.splice(idx, 1)
                      }
                      oTableModel1.setProperty("/aTableData5", aTableArr1);

                    },
                    error: function (e) {
                      oBusyDialog.close();
                      // for (var i = 0; i < aSelectedIndex.length; i++) {
                      //   aNewArray.push(aTableArr1[aSelectedIndex[i]]);
                      //   // aTableArr.splice(aSelectedIndex[i],1);
                      // }

                      // aNewArray.map(function (item) {
                      //   var FaultCode = item.Rescnt;
                      //   var iIndex = "";
                      //   aTableArr1.map(function (item, index) {
                      //     if (FaultCode === item.ResultantCout) {
                      //       iIndex = index
                      //     }
                      //   });
                      //   aTableArr1.splice(iIndex, 1);
                      // }.bind(this));


                      // TableModel1.setProperty("/aTableData2", aTableArr1);
                      var id = "";
                      var path = ""
                      var idx = ""

                      for (var i = aSelectedIndex.length - 1; i >= 0; --i) {
                        id = aSelectedIndex[i]
                        path = oTable.getContextByIndex(id).sPath;
                        idx = parseInt(path.substring(path.lastIndexOf('/') + 1))
                        aTableArr1.splice(idx, 1)
                      }
                      oTableModel1.setProperty("/aTableData5", aTableArr1);
                    }
                  });
                }
              }
            }
          });

        }

      },
      extraendsadd: function () {
        var extraends = Number(this.getView().byId("extraends").getValue());
        var totends = Number(this.getView().byId("Idtotend").getValue());
        var oInput = this.getView().byId("Idtotend");
        var a = extraends + totends;
        oInput.setValue(a);

      },
      ondyeingshade: function () {
        var dyeingsort = this.getView().byId("iddyeingsort").getValue();
        var oInput = this.getView().byId("dyetyp");
        var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZMASTER_CARD_SERVICE_BIN");
        var oFilter1 = new sap.ui.model.Filter("Product", "EQ", dyeingsort)
        oModel.read("/DYESORT", {
          filters: [oFilter1],
          success: function (oresponse) {
            var shade = oresponse.results[0].dyeingshade;
            oInput.setValue(shade);
          }.bind(this)
        })

      },
      headerdataqlty: function () {
        var oModel = this.getView().getModel();
        var qualitycode = this.getView().byId("QUAco").getValue();

        var reed = this.getView().byId("reed");
        var oInput1 = this.getView().byId("dent");
        var oInput2 = this.getView().byId("EPI");
        var oInput3 = this.getView().byId("Picks");
        var reedspace = this.getView().byId("reeds");
        var oInput5 = this.getView().byId("Weave");
        var oInput6 = this.getView().byId("iddyeingsort");
        var dyeingshade = this.getView().byId("dyetyp");
        var PDNO = this.getView().byId("crmat");
        var oInput9 = this.getView().byId("extraends");
        var totalends = this.getView().byId("Idtotend");
        var loomtype = this.getView().byId("Lotyp");
        if (plant === "1200" && dept === "PPC") {
          // path: "/MAT_DES"

          var oFilter = new sap.ui.model.Filter("Product", "EQ", qualitycode);
          oModel.read("/MAT_DES", {
            filters: [oFilter],
            success: function (oresponse) {

            }.bind(this),
            error: function () {

            }
          })
        }
        else if (plant === "1300" && dept === "PPC") {
          // path: "/Mat_Des_FG"
          var oFilter = new sap.ui.model.Filter("Product", "EQ", qualitycode);
          oModel.read("/Mat_Des_FG", {
            filters: [oFilter],
            success: function (oresponse) {
              var Dent = oresponse.results[0].Dent;
              var Reed = oresponse.results[0].Reed;
              var Epi = oresponse.results[0].Epi;
              var Reedspace = oresponse.results[0].Reedspace;
              var Pick = oresponse.results[0].Pick;
              var Weave = oresponse.results[0].Weave;
              var Dyeingsort = oresponse.results[0].Dyeingsort;
              var Dyeingshade = oresponse.results[0].Dyeingshade;
              var Extraends = oresponse.results[0].Extraends;
              var Pdno = oresponse.results[0].Pdno;
              var Totalends = oresponse.results[0].Totalends;
              var Loomtype = oresponse.results[0].Loomtype;


              reed.setValue(Reed);
              oInput1.setValue(Dent);
              oInput2.setValue(Epi);
              oInput3.setValue(Pick);
              reedspace.setValue(Reedspace);
              oInput5.setValue(Weave);
              oInput6.setValue(Dyeingsort);
              dyeingshade.setValue(Dyeingshade);
              PDNO.setValue(Pdno);
              oInput9.setValue(Extraends);
              totalends.setValue(Totalends);
              loomtype.setValue(Loomtype);

            }.bind(this),
            error: function () {

            }
          })
        }
        else if (dept === "PD") {
          // path: "/Mat_Des_PD"
        }

      },

      onOpenDialog: function (oEvent) {

        var oTableModel1 = this.getView().getModel("oBatchData4").getProperty("/aData4");


        var oBusyDialog = new sap.m.BusyDialog({
          text: "Please wait"
        });
        oBusyDialog.open();
        var oView = this.getView();
        if (!this.oDilaog) {
          this.oDilaog = Fragment.load({
            id: oView.getId(),
            name: "zmastercard.zmastercard.fragments.copywarp",
            controller: this
          }).then(function (oTableModel1) {
            oView.addDependent(oTableModel1);
            return oTableModel1;
          });
        }


        this.oDilaog.then(function (oDialog) {
          oDialog.open();
        });
        oBusyDialog.close();
      },
      onclosedialog: function (oEvent) {
        this.oDilaog.then(function (oDialog) {
          oDialog.close();
        });
      },
      readwarp: function (oEvent) {
        var oBusyDialog = new sap.m.BusyDialog({
          text: "Please wait"
        });
        oBusyDialog.open();

        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel1");
        this.getView().getModel("oTableDataModel1").setProperty("/aTableData1", []);
        var cardno = oEvent.mParameters.value;
        // var oCommonModel = this.getOwnerComponent().getModel('oCommonModel');
        // var Action = oCommonModel.getProperty('/displayObject').Action;
        // var cardno = oCommonModel.getProperty('/displayObject').cardno;
        var oModel = this.getView().getModel();
        var oFilter = new sap.ui.model.Filter("Zpno", "EQ", cardno);


        var TableModel1 = this.getView().getModel("oTableDataModel1");
        var aTableArr1 = TableModel1.getProperty("/aTableData1")
        var TableModel2 = this.getView().getModel("oTableDataModel2");
        var aTableArr2 = TableModel2.getProperty("/aTableData2")
        var aTablearr1 = [];
        var aTablearr2 = [];
        oModel.read("/zpc_warppattern", {
          filters: [oFilter],
          success: function (oresponse) {
            var table1 = []
            var table2 = []
            for (var i = 0; i < oresponse.results.length; i++) {
              if (oresponse.results[i].Pattern === "1") {
                table1.push(oresponse.results[i])
              }
              if (oresponse.results[i].Pattern === "2") {
                table2.push(oresponse.results[i])
              }

            }
            var data1 = table1;
            data1.map(function (data1) {
              var obj1 = {
                YarnQuality: data1.Zpmyqlty,
                YarnDescrption: data1.Maktx,
                ResultantCout: data1.Rescnt,
                endsPerRepeat: data1.Ends,
                WtperMeter: data1.Wpmtr,
                RepeatMultiplier: data1.Rep,
                p1: data1.P1,
                p2: data1.P2,
                p3: data1.P3,
                p4: data1.P4,
                p5: data1.P5,
                p6: data1.P6,
                p7: data1.P7,
                p8: data1.P8,
                p9: data1.P9,
                p10: data1.P10,
                p11: data1.P11,
                p12: data1.P12,
                p13: data1.P13,
                p14: data1.P14,
                p15: data1.P15,
                p16: data1.P16,
                p17: data1.P17,
                p18: data1.P18,
                p19: data1.P19,
                p20: data1.P20,
              }

              aTableArr1.push(obj1);
              TableModel1.setProperty("/aTableData1", aTableArr1)
            })

            this.oDilaog.then(function (oDialog) {
              oDialog.close();
            });
            // var data2 = table2;
            // data2.map(function (data2) {
            //   var obj2 = {
            //     YarnQuality: data2.Zpmyqlty,
            //     YarnDescrption: data2.Maktx,
            //     ResultantCout: data2.Rescnt,
            //     PicksPerRepeat: data2.Ends,
            //     WtperMeter: data2.Wpmtr,
            //     RepeatMultiplier: data2.Rep,
            //     p1: data2.P1,
            //     p2: data2.P2,
            //     p3: data2.P3,
            //     p4: data2.P4,
            //     p5: data2.P5,
            //     p6: data2.P6,
            //     p7: data2.P7,
            //     p8: data2.P8,
            //     p9: data2.P9,
            //     p10: data2.P10,
            //     p11: data2.P11,
            //     p12: data2.P12,
            //     p13: data2.P13,
            //     p14: data2.P14,
            //     p15: data2.P15,
            //     p16: data2.P16,
            //     p17: data2.P17,
            //     p18: data2.P18,
            //     p19: data2.P19,
            //     p20: data2.P20,
            //   }

            //   aTableArr2.push(obj2);
            //   TableModel2.setProperty("/aTableData2", aTableArr2)
            // })

            // if (Action === "Copy Warp/weft Patern") {
            //   this.copymastercard();
            // }
            oBusyDialog.close();
          }.bind(this),
          error: function () {
            oBusyDialog.close();
          }.bind(this)
        });


      },

      onOpenDialog1: function (oEvent) {

        var oTableModel1 = this.getView().getModel("oBatchData4").getProperty("/aData4");


        var oBusyDialog = new sap.m.BusyDialog({
          text: "Please wait"
        });
        oBusyDialog.open();
        var oView = this.getView();
        if (!this.oDilaog1) {
          this.oDilaog1 = Fragment.load({
            id: oView.getId(),
            name: "zmastercard.zmastercard.fragments.copyweft",
            controller: this
          }).then(function (oTableModel1) {
            oView.addDependent(oTableModel1);
            return oTableModel1;
          });
        }


        this.oDilaog1.then(function (oDilaog1) {
          oDilaog1.open();
        });
        oBusyDialog.close();
      },
      onclosedialog1: function (oEvent) {
        this.oDilaog1.then(function (oDilaog1) {
          oDilaog1.close();
        });
      },
      readweft: function (oEvent) {
        var oBusyDialog = new sap.m.BusyDialog({
          text: "Please wait"
        });
        oBusyDialog.open();

        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel2");
        this.getView().getModel("oTableDataModel2").setProperty("/aTableData2", []);
        var cardno = oEvent.mParameters.value;
        // var oCommonModel = this.getOwnerComponent().getModel('oCommonModel');
        // var Action = oCommonModel.getProperty('/displayObject').Action;
        // var cardno = oCommonModel.getProperty('/displayObject').cardno;
        var oModel = this.getView().getModel();
        var oFilter = new sap.ui.model.Filter("Zpno", "EQ", cardno);


        var TableModel1 = this.getView().getModel("oTableDataModel1");
        var aTableArr1 = TableModel1.getProperty("/aTableData1")
        var TableModel2 = this.getView().getModel("oTableDataModel2");
        var aTableArr2 = TableModel2.getProperty("/aTableData2")
        var aTablearr1 = [];
        var aTablearr2 = [];
        oModel.read("/zpc_warppattern", {
          filters: [oFilter],
          success: function (oresponse) {
            this.oDilaog1.then(function (oDilaog1) {
              oDilaog1.close();
            });
            var table1 = []
            var table2 = []
            for (var i = 0; i < oresponse.results.length; i++) {
              if (oresponse.results[i].Pattern === "1") {
                table1.push(oresponse.results[i])
              }
              if (oresponse.results[i].Pattern === "2") {
                table2.push(oresponse.results[i])
              }

            }
            var data2 = table2;
            data2.map(function (data2) {
              var obj2 = {
                YarnQuality: data2.Zpmyqlty,
                YarnDescrption: data2.Maktx,
                ResultantCout: data2.Rescnt,
                PicksPerRepeat: data2.Ends,
                WtperMeter: data2.Wpmtr,
                RepeatMultiplier: data2.Rep,
                p1: data2.P1,
                p2: data2.P2,
                p3: data2.P3,
                p4: data2.P4,
                p5: data2.P5,
                p6: data2.P6,
                p7: data2.P7,
                p8: data2.P8,
                p9: data2.P9,
                p10: data2.P10,
                p11: data2.P11,
                p12: data2.P12,
                p13: data2.P13,
                p14: data2.P14,
                p15: data2.P15,
                p16: data2.P16,
                p17: data2.P17,
                p18: data2.P18,
                p19: data2.P19,
                p20: data2.P20,
              }

              aTableArr2.push(obj2);
              TableModel2.setProperty("/aTableData2", aTableArr2)
            })


            oBusyDialog.close();
          }.bind(this),
          error: function () {
            oBusyDialog.close();
          }.bind(this)
        });


      },


      onOpenDialog2: function (oEvent) {

        var oTableModel1 = this.getView().getModel("oBatchData4").getProperty("/aData4");


        var oBusyDialog = new sap.m.BusyDialog({
          text: "Please wait"
        });
        oBusyDialog.open();
        var oView = this.getView();
        if (!this.oDilaog2) {
          this.oDilaog2 = Fragment.load({
            id: oView.getId(),
            name: "zmastercard.zmastercard.fragments.copydaft",
            controller: this
          }).then(function (oTableModel1) {
            oView.addDependent(oTableModel1);
            return oTableModel1;
          });
        }


        this.oDilaog2.then(function (oDilaog2) {
          oDilaog2.open();
        });
        oBusyDialog.close();
      },
      onclosedialog2: function (oEvent) {
        this.oDilaog2.then(function (oDilaog2) {
          oDilaog2.close();
        });
      },
      readdraft: function (oEvent) {
        var oBusyDialog = new sap.m.BusyDialog({
          text: "Please wait"
        });
        oBusyDialog.open();

        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel3");
        this.getView().getModel("oTableDataModel3").setProperty("/aTableData3", []);

        var cardno = oEvent.mParameters.value;
        var oModel = this.getView().getModel();
        var oFilter = new sap.ui.model.Filter("Zpno", "EQ", cardno);

        var TableModel3 = this.getView().getModel("oTableDataModel3");
        var aTableArr3 = TableModel3.getProperty("/aTableData3")
        var TableModel4 = this.getView().getModel("oTableDataModel4");
        var aTableArr4 = TableModel4.getProperty("/aTableData4")
        var aTablearr3 = [];
        var aTablearr4 = [];
        var array = []
        oModel.read("/ZPC_DRAFTPEGPLAN", {
          filters: [oFilter],
          success: function (oresponse) {
            this.oDilaog2.then(function (oDilaog2) {
              oDilaog2.close();
            });

            var table1 = []
            var table2 = []

            for (var i = 0; i < oresponse.results.length; i++) {
              if (oresponse.results[i].Ptype === "1") {
                table1.push(oresponse.results[i])
              }
              if (oresponse.results[i].Ptype === "2") {
                table2.push(oresponse.results[i])
              }

            }
            var data1 = table1.map((res) => { return { ...res, Zpmsno: Number(res.Zpmsno) } }).sort((a, b) => a.Zpmsno - b.Zpmsno);
            data1.map(function (data1) {
              var obj3 = {
                Description: data1.Pmdesc,
                Multiplier: data1.Mul,
                Repeats: data1.Repeats,

              }

              aTableArr3.push(obj3);
              TableModel3.setProperty("/aTableData3", aTableArr3)
            })


            // var data2 = table2.map((res) => { return { ...res, Zpmsno: Number(res.Zpmsno) } }).sort((a, b) => a.Zpmsno - b.Zpmsno);
            // data2.map(function (data2) {
            //   var obj4 = {
            //     Description: data2.Pmdesc,
            //     Multiplier: data2.Mul,
            //     Repeats: data2.Repeats,
            //     Remarks: data2.Remark
            //   }

            //   aTableArr4.push(obj4);
            //   TableModel4.setProperty("/aTableData4", aTableArr4)
            // })

            oBusyDialog.close();
          }.bind(this),
          error: function () {
            oBusyDialog.close();
          }.bind(this)
        });
      },

      onOpenDialog3: function (oEvent) {

        var oTableModel1 = this.getView().getModel("oBatchData4").getProperty("/aData4");


        var oBusyDialog = new sap.m.BusyDialog({
          text: "Please wait"
        });
        oBusyDialog.open();
        var oView = this.getView();
        if (!this.oDilaog3) {
          this.oDilaog3 = Fragment.load({
            id: oView.getId(),
            name: "zmastercard.zmastercard.fragments.copypeg",
            controller: this
          }).then(function (oTableModel1) {
            oView.addDependent(oTableModel1);
            return oTableModel1;
          });
        }


        this.oDilaog3.then(function (oDilaog3) {
          oDilaog3.open();
        });
        oBusyDialog.close();
      },
      onclosedialog3: function (oEvent) {
        this.oDilaog3.then(function (oDilaog3) {
          oDilaog3.close();
        });
      },
      readpeg: function (oEvent) {
        var oBusyDialog = new sap.m.BusyDialog({
          text: "Please wait"
        });
        oBusyDialog.open();

        this.getView().setModel(new sap.ui.model.json.JSONModel(), "oTableDataModel4");
        this.getView().getModel("oTableDataModel4").setProperty("/aTableData4", []);

        var cardno = oEvent.mParameters.value;
        var oModel = this.getView().getModel();
        var oFilter = new sap.ui.model.Filter("Zpno", "EQ", cardno);

        var TableModel3 = this.getView().getModel("oTableDataModel3");
        var aTableArr3 = TableModel3.getProperty("/aTableData3")
        var TableModel4 = this.getView().getModel("oTableDataModel4");
        var aTableArr4 = TableModel4.getProperty("/aTableData4")
        var aTablearr3 = [];
        var aTablearr4 = [];
        var array = []
        oModel.read("/ZPC_DRAFTPEGPLAN", {
          filters: [oFilter],
          success: function (oresponse) {
            this.oDilaog3.then(function (oDilaog3) {
              oDilaog3.close();
            });

            var table1 = []
            var table2 = []

            for (var i = 0; i < oresponse.results.length; i++) {
              if (oresponse.results[i].Ptype === "1") {
                table1.push(oresponse.results[i])
              }
              if (oresponse.results[i].Ptype === "2") {
                table2.push(oresponse.results[i])
              }

            }


            var data2 = table2.map((res) => { return { ...res, Zpmsno: Number(res.Zpmsno) } }).sort((a, b) => a.Zpmsno - b.Zpmsno);
            data2.map(function (data2) {
              var obj4 = {
                Description: data2.Pmdesc,
                Multiplier: data2.Mul,
                Repeats: data2.Repeats,
                Remarks: data2.Remark
              }

              aTableArr4.push(obj4);
              TableModel4.setProperty("/aTableData4", aTableArr4)
            })

            oBusyDialog.close();
          }.bind(this),
          error: function () {
            oBusyDialog.close();Qualitycodesubmit
          }.bind(this)
        });
      },
          //  OLD CODE TRUE  //
      F4MATDES_11: function () {

        var plant = this.getView().byId("plant").getValue();
        var dept = this.getView().byId("dept").getValue();
        if (plant === "") {
          MessageBox.error("Please Fill Plant");
        }
        else if (dept === "") {
          MessageBox.error("Please Fill Department");
        }
        else {
          var oBusyDialog = new sap.m.BusyDialog({
            text: "Please wait"
          });
          oBusyDialog.open();
          var data = this.getView().getModel("oBatchData").getProperty("/aData");
          var data1 = this.getView().getModel("oBatchData1").getProperty("/aData1");
          var aData2 = this.getView().getModel("oBatchData2").getProperty("/aData2");
          var aData3 = this.getView().getModel("oBatchData3").getProperty("/aData3");

          const that = this;
          var CODE = this.getView().byId("QUAco");
          var oInput = this.getView().byId("QUAdesc");
          var reed = this.getView().byId("reed");
          var oInput1 = this.getView().byId("dent");
          var oInput2 = this.getView().byId("EPI");
          var oInput3 = this.getView().byId("Picks");
          var reedspace = this.getView().byId("reeds");
          var oInput5 = this.getView().byId("Weave");
          var oInput6 = this.getView().byId("iddyeingsort");
          var dyeingshade = this.getView().byId("dyetyp");
          var PDNO = this.getView().byId("crmat");
          var oInput9 = this.getView().byId("extraends");
          var totalends = this.getView().byId("Idtotend");
          var loomtype = this.getView().byId("Lotyp");

          if (!this._oValueHelpDialog) {
            this._oValueHelpDialog = new sap.ui.comp.valuehelpdialog.ValueHelpDialog("QUAco", {
              supportMultiselect: false,
              supportRangesOnly: false,
              stretch: sap.ui.Device.system.phone,
              keys: "QUAco",
              descriptionKey: "QUAco",
              filtermode: "true",
              enableBasicSearch: "true",
              ok: function (oEvent) {
                var valueset = oEvent.mParameters.tokens[0].mAggregations.customData[0].mProperties.value.Product;
                var valueset1 = oEvent.mParameters.tokens[0].mAggregations.customData[0].mProperties.value.ProductDescription;


                var pno = "";
                data.map(function (items) {
                  if (valueset === items.Zpqlycode)
                    pno = items.Zpno;

                })



                if (plant === "1200" && dept === "PPC") {
                  // path: "/MAT_DES"
                  var Dent = "";
                  var Reed = "";
                  var Epi = "";
                  var Reedspace = "";
                  var Pick = "";
                  var Weave = "";
                  var Dyeingsort = "";
                  var Dyeingshade = "";
                  var Extraends = "";
                  var Pdno = "";
                  var Totalends = "";
                  var Loomtype = "";

                  aData3.map(function (items) {
                    if (valueset === items.Product) {
                      Dent = items.Dent;
                      Reed = items.Reed;
                      Epi = items.Epi;
                      Reedspace = items.Reedspace;
                      Pick = items.Pick;
                      Weave = items.Weave;
                      Dyeingsort = items.Dyeingsort;
                      Dyeingshade = items.Dyeingshade;
                      Extraends = items.Extraends;
                      Pdno = items.Pdno;
                      Totalends = items.Totalends;
                      Loomtype = items.Loomtype;
                    }

                  })

                  reed.setValue(Reed);
                  oInput1.setValue(Dent);
                  oInput2.setValue(Epi);
                  oInput3.setValue(Pick);
                  reedspace.setValue(Reedspace);
                  oInput5.setValue(Weave);
                  oInput6.setValue(Dyeingsort);
                  dyeingshade.setValue(Dyeingshade);
                  PDNO.setValue(Pdno);
                  oInput9.setValue(Extraends);
                  totalends.setValue(Totalends);
                  loomtype.setValue(Loomtype);
                }
                else if (plant === "1300" && dept === "PPC") {
                  // path: "/Mat_Des_FG"
                  var Dent = "";
                  var Reed = "";
                  var Epi = "";
                  var Reedspace = "";
                  var Pick = "";
                  var Weave = "";
                  var Dyeingsort = "";
                  var Dyeingshade = "";
                  var Extraends = "";
                  var Pdno = "";
                  var Totalends = "";
                  var Loomtype = "";

                  aData2.map(function (items) {
                    if (valueset === items.Product) {
                      Dent = items.Dent;
                      Reed = items.Reed;
                      Epi = items.Epi;
                      Reedspace = items.Reedspace;
                      Pick = items.Pick;
                      Weave = items.Weave;
                      Dyeingsort = items.Dyeingsort;
                      Dyeingshade = items.Dyeingshade;
                      Extraends = items.Extraends;
                      Pdno = items.Pdno;
                      Totalends = items.Totalends;
                      Loomtype = items.Loomtype;
                    }

                  })

                  reed.setValue(Reed);
                  oInput1.setValue(Dent);
                  oInput2.setValue(Epi);
                  oInput3.setValue(Pick);
                  reedspace.setValue(Reedspace);
                  oInput5.setValue(Weave);
                  oInput6.setValue(Dyeingsort);
                  dyeingshade.setValue(Dyeingshade);
                  PDNO.setValue(Pdno);
                  oInput9.setValue(Extraends);
                  totalends.setValue(Totalends);
                  loomtype.setValue(Loomtype);


                }
                else if (dept === "PD") {
                  // path: "/Mat_Des_PD"
                  var Dent = "";
                  var Reed = "";
                  var Epi = "";
                  var Reedspace = "";
                  var Pick = "";
                  var Weave = "";
                  var Dyeingsort = "";
                  var Dyeingshade = "";
                  var Extraends = "";
                  var Pdno = "";
                  var Totalends = "";
                  var Loomtype = "";

                  data1.map(function (items) {
                    if (valueset === items.Product) {
                      Dent = items.Dent;
                      Reed = items.Reed;
                      Epi = items.Epi;
                      Reedspace = items.Reedspace;
                      Pick = items.Pick;
                      Weave = items.Weave;
                      Dyeingsort = items.Dyeingsort;
                      Dyeingshade = items.Dyeingshade;
                      Extraends = items.Extraends;
                      Pdno = items.Pdno;
                      Totalends = items.Totalends;
                      Loomtype = items.Loomtype;
                    }

                  })

                  reed.setValue(Reed);
                  oInput1.setValue(Dent);
                  oInput2.setValue(Epi);
                  oInput3.setValue(Pick);
                  reedspace.setValue(Reedspace);
                  oInput5.setValue(Weave);
                  oInput6.setValue(Dyeingsort);
                  dyeingshade.setValue(Dyeingshade);
                  PDNO.setValue(Pdno);
                  oInput9.setValue(Extraends);
                  totalends.setValue(Totalends);
                  loomtype.setValue(Loomtype);
                }

                if (pno === "") {
                  CODE.setValue(valueset);
                  oInput.setValue(valueset1);
                  this.close();

                  // Call the function with the appropriate parameters
                  that.departmentDataFetch_automatically(valueset, dept, plant);

                }
                else {
                  this.close();
                  CODE.setValue("");
                  oInput.setValue("");
                  MessageBox.error("Master Card is Already Exist For this Quality Code:-  " + valueset + "   Master Card No.:  " + pno);
                }



              },
              cancel: function () {
                this.close();

              }
            });

          }


          var oFilterBar = new sap.ui.comp.filterbar.FilterBar({
            advancedMode: true,
            filterBarExpanded: false,
            filterBarExpanded: true,
            enableBasicSearch: true,
            showGoOnFB: !sap.ui.Device.system.phone,
            filterGroupItems: [new sap.ui.comp.filterbar.FilterGroupItem({ groupTitle: "foo", groupName: "gn1", name: "n1", label: "Product", control: new sap.m.Input() }),
            new sap.ui.comp.filterbar.FilterGroupItem({ groupTitle: "foo", groupName: "gn1", name: "n2", label: "ProductDescription", control: new sap.m.Input() })],




            search: function (oEvt) {
              oBusyDialog.open();
              //  var oParams = oEvt.getParameter("YY1_PACKINGTYPE");
              var Product = oEvt.mParameters.selectionSet[0].mProperties.value;
              var ProductDescription = oEvt.mParameters.selectionSet[1].mProperties.value;

              if (plant === "1200" && dept === "PPC") {
                // if threee no  values 
                if (Product === "" && ProductDescription === "") {
                  oTable.bindRows({
                    path: "/MAT_DES"
                  });
                }
                else if (Product === "") {
                  oTable.bindRows({
                    path: "/MAT_DES", filters: [
                      new sap.ui.model.Filter("ProductDescription", sap.ui.model.FilterOperator.Contains, ProductDescription)]
                  });
                }
                else if (ProductDescription === "") {
                  oTable.bindRows({
                    path: "/MAT_DES", filters: [
                      new sap.ui.model.Filter("Product", sap.ui.model.FilterOperator.Contains, Product)]
                  });
                }
              }


              else if (plant === "1300" && dept === "PPC") {
                if (Product === "" && ProductDescription === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_FG"
                  });
                }
                else if (Product === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_FG", filters: [
                      new sap.ui.model.Filter("ProductDescription", sap.ui.model.FilterOperator.Contains, ProductDescription)]
                  });
                }
                else if (ProductDescription === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_FG", filters: [
                      new sap.ui.model.Filter("Product", sap.ui.model.FilterOperator.Contains, Product)]
                  });
                }
              }
              else if (plant === "2100" && dept === "PPC") {
                if (Product === "" && ProductDescription === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_FG"
                  });
                }
                else if (Product === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_FG", filters: [
                      new sap.ui.model.Filter("ProductDescription", sap.ui.model.FilterOperator.Contains, ProductDescription)]
                  });
                }
                else if (ProductDescription === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_FG", filters: [
                      new sap.ui.model.Filter("Product", sap.ui.model.FilterOperator.Contains, Product)]
                  });
                }
              }

              else if (dept === "PD") {
                if (Product === "" && ProductDescription === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_PD"
                  });
                }
                else if (Product === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_PD", filters: [
                      new sap.ui.model.Filter("ProductDescription", sap.ui.model.FilterOperator.Contains, ProductDescription)]
                  });
                }
                else if (ProductDescription === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_PD", filters: [
                      new sap.ui.model.Filter("Product", sap.ui.model.FilterOperator.Contains, Product)]
                  });
                }
              }


              oBusyDialog.close();
            }
          });

          this._oValueHelpDialog.setFilterBar(oFilterBar);
          var oColModel = new sap.ui.model.json.JSONModel();
          oColModel.setData({
            cols: [
              { label: "Product", template: "Product" },
              { label: "ProductDescription", template: "ProductDescription" }
            ]
          });
          var oTable = this._oValueHelpDialog.getTable();
          oTable.setModel(oColModel, "columns");
          var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZMASTER_CARD_SERVICE_BIN");
          oTable.setModel(oModel);
          oBusyDialog.close();
          this._oValueHelpDialog.open();
        }
      },

      departmentDataFetch_automatically_old: function (code, dept, plant) {
        var qualityCode = code;
        // var plant = plant; // fetching from parameter
        // var dept = dept;

        var plant = this.getView().byId("plant").getValue();
        var dept = this.getView().byId("dept").getValue();

        var fb_plant = new sap.ui.model.Filter("Plant", "EQ", plant);
        var fb_dept = new sap.ui.model.Filter("Department", "EQ", dept);

        var oTableModel1 = this.getView().getModel("oTableDataModel1");
        var oTableModel2 = this.getView().getModel("oTableDataModel2");

        if (plant === "1200" && (dept === "PPC" || dept === "PD")) {
          var oBusyDialog = new sap.m.BusyDialog({
            text: "Please wait"
          });
          oBusyDialog.open();

          var oModel = this.getView().getModel();
          var anotherEntityFilter = new sap.ui.model.Filter("Material", "EQ", qualityCode); // Adjust filter as needed


          oModel.read("/ZPP_SORTMASTER_CDS", {
            filters: [anotherEntityFilter, fb_plant, fb_dept],
            success: function (anotherResponse) {
              if (anotherResponse.results.length > 0) {

                // var oTableModel1 = this.getView().getModel("oTableDataModel1");
                if (oTableModel1) {
                  var aTableData1 = []; // Clear existing data
                  oTableModel1.setProperty("/aTableData1", []);

                  anotherResponse.results.forEach(function (item) {
                    var obj = {
                      YarnQuality: item.Warptype1,
                      YarnDescrption: item.warptypedesc1
                    };
                    aTableData1.push(obj);
                  });

                  oTableModel1.setProperty("/aTableData1", aTableData1);
                } else {
                  console.error("Table model 'oTableDataModel1' is not defined.");
                }

                // setting value for the weft table

                // var oTableModel2 = this.getView().getModel("oTableDataModel2");
                if (oTableModel2) {
                  var aTableData2 = [];
                  oTableModel2.setProperty("/aTableData2", []);

                  anotherResponse.results.forEach(function (item) {
                    var obj = {
                      YarnQuality: item.Wefttype1,
                      YarnDescrption: item.wefttypedesc1
                    };
                    aTableData2.push(obj);
                  });

                  oTableModel2.setProperty("/aTableData2", aTableData2);
                } else {
                  console.error("Table model 'oTableDataModel2' is not defined.");
                }

                oBusyDialog.close();
              }

              else {

                console.warn("No data found for the specified Material.");
                oTableModel1.setProperty("/aTableData1", []);
                oTableModel2.setProperty("/aTableData2", []);

                oBusyDialog.close();
              }
            }.bind(this),
            error: function (err) {
              oBusyDialog.close();
              MessageBox.error("Error fetching additional data from ZPP_SORTMASTER_CDS");
            }
          });
        }
        else {
          oTableModel1.setProperty("/aTableData1", []);
          oTableModel2.setProperty("/aTableData2", []);

        }
      },

      departmentDataFetch_automatically_yesterday: function (code, dept, plant) {
        var qualityCode = code;

        var plant = this.getView().byId("plant").getValue();
        var dept = this.getView().byId("dept").getValue();

        var fb_plant = new sap.ui.model.Filter("Plant", "EQ", plant);
        var fb_dept = new sap.ui.model.Filter("Department", "EQ", dept);

        var oTableModel1 = this.getView().getModel("oTableDataModel1");
        var oTableModel2 = this.getView().getModel("oTableDataModel2");

        if (plant === "1200" && (dept === "PPC" || dept === "PD")) {
          var oBusyDialog = new sap.m.BusyDialog({
            text: "Please wait"
          });
          oBusyDialog.open();

          var oModel = this.getView().getModel();
          var anotherEntityFilter = new sap.ui.model.Filter("Material", "EQ", qualityCode);

          oModel.read("/ZPP_SORTMASTER_CDS", {
            filters: [anotherEntityFilter, fb_plant, fb_dept],
            success: function (anotherResponse) {
              var aTableData1 = [];
              var aTableData2 = [];

              // Predefined RepeatMultiplier values
              var repeatValues = ["R2", "M2", "R1", "M1"];

              // Add predefined rows with RepeatMultiplier values
              repeatValues.forEach(function (value) {
                aTableData1.push({
                  YarnQuality: "",
                  YarnDescrption: "",
                  ResultantCout: "",
                  p1: "",
                  p2: "",
                  p3: "",
                  p4: "",
                  p5: "",
                  p6: "",
                  p7: "",
                  p8: "",
                  p9: "",
                  p10: "",
                  p11: "",
                  p12: "",
                  p13: "",
                  p14: "",
                  p15: "",
                  p16: "",
                  p17: "",
                  p18: "",
                  p19: "",
                  p20: "",
                  RepeatMultiplier: value,

                });
                aTableData2.push({
                  YarnQuality: "",
                  YarnDescrption: "",
                  ResultantCout: "",
                  p1: "",
                  p2: "",
                  p3: "",
                  p4: "",
                  p5: "",
                  p6: "",
                  p7: "",
                  p8: "",
                  p9: "",
                  p10: "",
                  p11: "",
                  p12: "",
                  p13: "",
                  p14: "",
                  p15: "",
                  p16: "",
                  p17: "",
                  p18: "",
                  p19: "",
                  p20: "",
                  RepeatMultiplier: value,
                });
              });

              if (anotherResponse.results.length > 0) {
                // Populate the data only if response has results
                anotherResponse.results.forEach(function (item) {
                  aTableData1.push({
                    YarnQuality: item.Warptype1,
                    YarnDescrption: item.warptypedesc1,
                    ResultantCout: "",
                    p1: "",
                    p2: "",
                    p3: "",
                    p4: "",
                    p5: "",
                    p6: "",
                    p7: "",
                    p8: "",
                    p9: "",
                    p10: "",
                    p11: "",
                    p12: "",
                    p13: "",
                    p14: "",
                    p15: "",
                    p16: "",
                    p17: "",
                    p18: "",
                    p19: "",
                    p20: "",
                  });
                  aTableData2.push({
                    YarnQuality: item.Wefttype1,
                    YarnDescrption: item.wefttypedesc1,
                    ResultantCout: "",
                    p1: "",
                    p2: "",
                    p3: "",
                    p4: "",
                    p5: "",
                    p6: "",
                    p7: "",
                    p8: "",
                    p9: "",
                    p10: "",
                    p11: "",
                    p12: "",
                    p13: "",
                    p14: "",
                    p15: "",
                    p16: "",
                    p17: "",
                    p18: "",
                    p19: "",
                    p20: "",
                  });
                });
              } else {
                console.warn("No data found for the specified Material.");
              }

              // Set the data (whether it came from the response or only includes predefined values)
              oTableModel1.setProperty("/aTableData1", aTableData1);
              oTableModel2.setProperty("/aTableData2", aTableData2);

              oBusyDialog.close();
            }.bind(this),
            error: function (err) {
              oBusyDialog.close();
              MessageBox.error("Error fetching additional data from ZPP_SORTMASTER_CDS");

              // Handle error case and still show predefined lines
              var repeatValues = ["R2", "M2", "R1", "M1"];
              var aTableData1 = [];
              var aTableData2 = [];

              // Add predefined rows with RepeatMultiplier values even on error
              repeatValues.forEach(function (value) {
                aTableData1.push({
                  YarnQuality: "",
                  YarnDescrption: "",
                  ResultantCout: "",
                  p1: "",
                  p2: "",
                  p3: "",
                  p4: "",
                  p5: "",
                  p6: "",
                  p7: "",
                  p8: "",
                  p9: "",
                  p10: "",
                  p11: "",
                  p12: "",
                  p13: "",
                  p14: "",
                  p15: "",
                  p16: "",
                  p17: "",
                  p18: "",
                  p19: "",
                  p20: "",
                  RepeatMultiplier: value,
                });
                aTableData2.push({
                  YarnQuality: "",
                  YarnDescrption: "",
                  ResultantCout: "",
                  p1: "",
                  p2: "",
                  p3: "",
                  p4: "",
                  p5: "",
                  p6: "",
                  p7: "",
                  p8: "",
                  p9: "",
                  p10: "",
                  p11: "",
                  p12: "",
                  p13: "",
                  p14: "",
                  p15: "",
                  p16: "",
                  p17: "",
                  p18: "",
                  p19: "",
                  p20: "",
                  RepeatMultiplier: value,
                });
              });

              oTableModel1.setProperty("/aTableData1", aTableData1);
              oTableModel2.setProperty("/aTableData2", aTableData2);
            }
          });
        } else {
          // If plant and dept do not meet conditions, clear tables and add predefined rows
          var repeatValues = ["R2", "M2", "R1", "M1"];
          var aTableData1 = [];
          var aTableData2 = [];

          repeatValues.forEach(function (value) {
            aTableData1.push({
              YarnQuality: "",
              YarnDescrption: "",
              RepeatMultiplier: value
            });
            aTableData2.push({
              YarnQuality: "",
              YarnDescrption: "",
              RepeatMultiplier: value
            });
          });

          oTableModel1.setProperty("/aTableData1", aTableData1);
          oTableModel2.setProperty("/aTableData2", aTableData2);
        }
      },

      departmentDataFetch_automatically: function (code, dept, plant) {
        var qualityCode = code;
        plant = this.getView().byId("plant").getValue();
        dept = this.getView().byId("dept").getValue();

        var oTableModel1 = this.getView().getModel("oTableDataModel1");
        var oTableModel2 = this.getView().getModel("oTableDataModel2");

        // Create the predefined table data with 4 lines
        var createPredefinedTableData = function () {
          var repeatValues = ["R2", "M2", "R1", "M1"];
          return repeatValues.map(function (value) {
            return {
              YarnQuality: "",
              YarnDescrption: "",
              ResultantCout: "",
              p1: "", p2: "", p3: "", p4: "", p5: "", p6: "", p7: "",
              p8: "", p9: "", p10: "", p11: "", p12: "", p13: "", p14: "",
              p15: "", p16: "", p17: "", p18: "", p19: "", p20: "",
              RepeatMultiplier: value
            };
          });
        };

        // Set predefined table data in case no data or error occurs
        var setPredefinedData = function () {
          var aTableData1 = createPredefinedTableData();
          var aTableData2 = createPredefinedTableData();
          oTableModel1.setProperty("/aTableData1", aTableData1);
          oTableModel2.setProperty("/aTableData2", aTableData2);
        };

        // OData call to fetch data only if plant and dept match
        if (plant === "1200" && (dept === "PPC" || dept === "PD")) {
          var oBusyDialog = new sap.m.BusyDialog({ text: "Please wait" });
          oBusyDialog.open();

          var oModel = this.getView().getModel();
          var fb_plant = new sap.ui.model.Filter("Plant", "EQ", plant);
          var fb_dept = new sap.ui.model.Filter("Department", "EQ", dept);
          var materialFilter = new sap.ui.model.Filter("Material", "EQ", qualityCode);

          oModel.read("/ZPP_SORTMASTER_CDS", {
            filters: [materialFilter, fb_plant, fb_dept],
            success: function (response) {
              var aTableData1 = createPredefinedTableData();
              var aTableData2 = createPredefinedTableData();

              if (response.results.length > 0) {
                // Add fetched data
                response.results.forEach(function (item) {
                  aTableData1.push({
                    YarnQuality: item.Warptype1,
                    YarnDescrption: item.warptypedesc1,
                    ResultantCout: "",
                    p1: "", p2: "", p3: "", p4: "", p5: "", p6: "", p7: "",
                    p8: "", p9: "", p10: "", p11: "", p12: "", p13: "", p14: "",
                    p15: "", p16: "", p17: "", p18: "", p19: "", p20: ""
                  });
                  aTableData2.push({
                    YarnQuality: item.Wefttype1,
                    YarnDescrption: item.wefttypedesc1,
                    ResultantCout: "",
                    p1: "", p2: "", p3: "", p4: "", p5: "", p6: "", p7: "",
                    p8: "", p9: "", p10: "", p11: "", p12: "", p13: "", p14: "",
                    p15: "", p16: "", p17: "", p18: "", p19: "", p20: ""
                  });
                });
              } else {
                console.warn("No data found for the specified Material.");
              }

              oTableModel1.setProperty("/aTableData1", aTableData1);
              oTableModel2.setProperty("/aTableData2", aTableData2);
              oBusyDialog.close();
            }.bind(this),
            error: function () {
              oBusyDialog.close();
              MessageBox.error("Error fetching data from ZPP_SORTMASTER_CDS");
              setPredefinedData();
            }
          });
        } else {
          setPredefinedData();
        }
      },


      onBack: function () {
        var sPreviousHash = History.getInstance().getPreviousHash();
        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          this.getOwnerComponent().getRouter().navTo("page1", null, true);
        }
      },


        // NEW CHANGES  //   


    Qualitycodesubmit: function () {
        var oInput = this.getView().byId("QUAco");
        var oInput1 = this.getView().byId("QUAdesc");
        var plant = this.getView().byId("plant").getValue();
        var dept = this.getView().byId("dept").getValue();
        if (plant === "") {
          MessageBox.error("Please Fill Plant");
          oInput.setValue("");
          oInput1.setValue("");
        }
        else if (dept === "") {
          MessageBox.error("Please Fill Department");
          oInput.setValue("");
          oInput1.setValue("");
        }
        else {

          if (plant === "1200" && dept === "PPC") {
            var oBusyDialog = new sap.m.BusyDialog({
              text: "Please wait"
            });
            oBusyDialog.open();
            var oModel = this.getView().getModel();
            var qualitycode = this.getView().byId("QUAco").getValue();
            var oInput = this.getView().byId("QUAco");
            var oInput1 = this.getView().byId("QUAdesc");
            var data = this.getView().getModel("oBatchData3").getProperty("/aData3");
            var oFilter = new sap.ui.model.Filter("Zpqlycode", "EQ", qualitycode);
            oModel.read("/ZPC_HEADERMASTER", {
              filters: [oFilter],
              success: function (oresponse) {
                if (oresponse.results.length === 0) {
                  var qualitydec = "";
                  data.map(function (items) {
                    if (qualitycode === items.Product)
                      qualitydec = items.ProductDescription
                  })
                  oInput1.setValue(qualitydec);
                  oBusyDialog.close();

                }
                else {
                  var zpno = oresponse.results[0].Zpno;
                  var Qualtycode = oresponse.results[0].Zpqlycode;
                  oInput.setValue("");
                  oBusyDialog.close();
                  MessageBox.error("Master Card is Already Exist For this Quality Code:-  " + Qualtycode + "   Master Card No.:  " + zpno);
                }
              }
            });
          }

          // automatically data for both wrap and weft

          // if (plant === "1200" && dept === "PPC") {
          //   var oBusyDialog = new sap.m.BusyDialog({
          //     text: "Please wait"
          //   });
          //   oBusyDialog.open();

          //   var oModel = this.getView().getModel();
          //   var qualitycode = this.getView().byId("QUAco").getValue();
          //   var oInput = this.getView().byId("QUAco");
          //   var oInput1 = this.getView().byId("QUAdesc");
          //   var data = this.getView().getModel("oBatchData3").getProperty("/aData3");

          //   // Filter for the first entity ZPC_HEADERMASTER
          //   var oFilter = new sap.ui.model.Filter("Zpqlycode", "EQ", qualitycode);
          //   var anotherEntityFilter = new sap.ui.model.Filter("Material", "EQ", qualitycode); // Adjust filter as needed

          //   oModel.read("/ZPC_HEADERMASTER", {
          //     filters: [oFilter],
          //     success: function (oresponse) {
          //       if (oresponse.results.length === 0) {
          //         var qualitydec = "";
          //         data.map(function (items) {
          //           if (qualitycode === items.Product)
          //             qualitydec = items.ProductDescription;
          //         });
          //         oInput1.setValue(qualitydec);

          //         // Request additional fields from ZPP_SORTMASTER_CDS
          //         oModel.read("/ZPP_SORTMASTER_CDS", {
          //           filters: [anotherEntityFilter],
          //           success: function (anotherResponse) {
          //             if (anotherResponse.results.length > 0) {
          //               // Check if table model 'oTableDataModel1' exists
          //               var oTableModel1 = this.getView().getModel("oTableDataModel1");
          //               if (oTableModel1) {
          //                 var aTableData1 = oTableModel1.getProperty("/aTableData1") || [];

          //                 anotherResponse.results.forEach(function (item) {
          //                   var obj = {
          //                     YarnQuality: item.Warptype1,
          //                     YarnDescrption: item.warptypedesc1
          //                   };
          //                   aTableData1.push(obj);
          //                 });

          //                 // Update the model with new data
          //                 oTableModel1.setProperty("/aTableData1", aTableData1);
          //               } else {
          //                 console.error("Table model 'oTableDataModel1' is not defined.");
          //               }

          //               // Check if table model 'oTableDataModel2' exists
          //               var oTableModel2 = this.getView().getModel("oTableDataModel2");
          //               if (oTableModel2) {
          //                 var aTableData2 = oTableModel2.getProperty("/aTableData2") || [];

          //                 anotherResponse.results.forEach(function (item) {
          //                   var obj = {
          //                     YarnQuality: item.Wefttype1,
          //                     YarnDescrption: item.wefttypedesc1
          //                   };
          //                   aTableData2.push(obj);
          //                 });

          //                 // Update the model with new data
          //                 oTableModel2.setProperty("/aTableData2", aTableData2);
          //               } else {
          //                 console.error("Table model 'oTableDataModel2' is not defined.");
          //               }

          //               oBusyDialog.close(); // Close after updating both table models
          //             } else {
          //               // Handle case where no data is returned
          //               console.warn("No data found for the specified Material.");
          //               oBusyDialog.close();
          //             }
          //           }.bind(this),
          //           error: function (err) {
          //             oBusyDialog.close();
          //             MessageBox.error("Error fetching additional data from ZPP_SORTMASTER_CDS");
          //           }
          //         });

          //       } else {
          //         var zpno = oresponse.results[0].Zpno;
          //         var Qualtycode = oresponse.results[0].Zpqlycode;
          //         oInput.setValue("");
          //         oBusyDialog.close();
          //         MessageBox.error("Master Card is Already Exist For this Quality Code: " + Qualtycode + "   Master Card No.: " + zpno);
          //       }
          //     }.bind(this),
          //     error: function (err) {
          //       oBusyDialog.close();
          //       MessageBox.error("Error fetching data from ZPC_HEADERMASTER");
          //     }
          //   });
          // }



          else if (plant === "1300" && dept === "PPC") {
            var oBusyDialog = new sap.m.BusyDialog({
              text: "Please wait"
            });
            oBusyDialog.open();
            var oModel = this.getView().getModel();
            var qualitycode = this.getView().byId("QUAco").getValue();
            var oInput = this.getView().byId("QUAco");
            var oInput1 = this.getView().byId("QUAdesc");
            var data = this.getView().getModel("oBatchData2").getProperty("/aData2");
            var oFilter = new sap.ui.model.Filter("Zpqlycode", "EQ", qualitycode);
            oModel.read("/ZPC_HEADERMASTER", {
              filters: [oFilter],
              success: function (oresponse) {
                if (oresponse.results.length === 0) {
                  var qualitydec = "";
                  data.map(function (items) {
                    if (qualitycode === items.Product)
                      qualitydec = items.ProductDescription
                  })
                  oInput1.setValue(qualitydec);
                  oBusyDialog.close();

                }
                else {
                  var zpno = oresponse.results[0].Zpno;
                  var Qualtycode = oresponse.results[0].Zpqlycode;
                  oInput.setValue("");
                  oBusyDialog.close();
                  MessageBox.error("Master Card is Already Exist For this Quality Code:-  " + Qualtycode + "   Master Card No.:  " + zpno);
                }
              }
            });
          }
          else if (plant === "1310" && dept === "PPC") {
            var oBusyDialog = new sap.m.BusyDialog({
              text: "Please wait"
            });
            oBusyDialog.open();
            var oModel = this.getView().getModel();
            var qualitycode = this.getView().byId("QUAco").getValue();
            var oInput = this.getView().byId("QUAco");
            var oInput1 = this.getView().byId("QUAdesc");
            var data = this.getView().getModel("oBatchData2").getProperty("/aData2");
            var oFilter = new sap.ui.model.Filter("Zpqlycode", "EQ", qualitycode);
            oModel.read("/ZPC_HEADERMASTER", {
              filters: [oFilter],
              success: function (oresponse) {
                if (oresponse.results.length === 0) {
                  var qualitydec = "";
                  data.map(function (items) {
                    if (qualitycode === items.Product)
                      qualitydec = items.ProductDescription
                  })
                  oInput1.setValue(qualitydec);
                  oBusyDialog.close();

                }
                else {
                  var zpno = oresponse.results[0].Zpno;
                  var Qualtycode = oresponse.results[0].Zpqlycode;
                  oInput.setValue("");
                  oBusyDialog.close();
                  MessageBox.error("Master Card is Already Exist For this Quality Code:-  " + Qualtycode + "   Master Card No.:  " + zpno);
                }
              }
            });
          }
          else if (dept === "PD") {
            var oBusyDialog = new sap.m.BusyDialog({
              text: "Please wait"
            });
            oBusyDialog.open();
            var oModel = this.getView().getModel();
            var qualitycode = this.getView().byId("QUAco").getValue();
            var oInput = this.getView().byId("QUAco");
            var oInput1 = this.getView().byId("QUAdesc");
            var data = this.getView().getModel("oBatchData1").getProperty("/aData1");
            var oFilter = new sap.ui.model.Filter("Zpqlycode", "EQ", qualitycode);
            oModel.read("/ZPC_HEADERMASTER", {
              filters: [oFilter],
              success: function (oresponse) {
                if (oresponse.results.length === 0) {
                  var qualitydec = "";
                  data.map(function (items) {
                    if (qualitycode === items.Product)
                      qualitydec = items.ProductDescription
                  })
                  oInput1.setValue(qualitydec);
                  oBusyDialog.close();

                }
                else {
                  var zpno = oresponse.results[0].Zpno;
                  var Qualtycode = oresponse.results[0].Zpqlycode;
                  oInput.setValue("");
                  oBusyDialog.close();
                  MessageBox.error("Master Card is Already Exist For this Quality Code:-  " + Qualtycode + "   Master Card No.:  " + zpno);
                }
              }
            });
          }

        }



      },







          F4MATDES: function () {

        var plant = this.getView().byId("plant").getValue();
        var dept = this.getView().byId("dept").getValue();
        if (plant === "") {
          MessageBox.error("Please Fill Plant");
        }
        else if (dept === "") {
          MessageBox.error("Please Fill Department");
        }
        else {
          var oBusyDialog = new sap.m.BusyDialog({
            text: "Please wait"
          });
          oBusyDialog.open();
          var data = this.getView().getModel("oBatchData").getProperty("/aData");
          var data1 = this.getView().getModel("oBatchData1").getProperty("/aData1");
          var aData2 = this.getView().getModel("oBatchData2").getProperty("/aData2");
          var aData3 = this.getView().getModel("oBatchData3").getProperty("/aData3");

          const that = this;
          var CODE = this.getView().byId("QUAco");
          var oInput = this.getView().byId("QUAdesc");
          var reed = this.getView().byId("reed");
          var oInput1 = this.getView().byId("dent");
          var oInput2 = this.getView().byId("EPI");
          var oInput3 = this.getView().byId("Picks");
          var reedspace = this.getView().byId("reeds");
          var oInput5 = this.getView().byId("Weave");
          var oInput6 = this.getView().byId("iddyeingsort");
          var dyeingshade = this.getView().byId("dyetyp");
          var PDNO = this.getView().byId("crmat");
          var oInput9 = this.getView().byId("extraends");
          var totalends = this.getView().byId("Idtotend");
          var loomtype = this.getView().byId("Lotyp");

          if (!this._oValueHelpDialog) {
            this._oValueHelpDialog = new sap.ui.comp.valuehelpdialog.ValueHelpDialog("QUAco", {
              supportMultiselect: false,
              supportRangesOnly: false,
              stretch: sap.ui.Device.system.phone,
              keys: "QUAco",
              descriptionKey: "QUAco",
              filtermode: "true",
              enableBasicSearch: "true",
              ok: function (oEvent) {
                var valueset = oEvent.mParameters.tokens[0].mAggregations.customData[0].mProperties.value.Product;
                var valueset1 = oEvent.mParameters.tokens[0].mAggregations.customData[0].mProperties.value.ProductDescription;


                var pno = "";
                data.map(function (items) {
                  if (valueset === items.Zpqlycode)
                    pno = items.Zpno;

                })



                if (plant === "1200" && dept === "PPC") {
                  // path: "/MAT_DES"
                  var Dent = "";
                  var Reed = "";
                  var Epi = "";
                  var Reedspace = "";
                  var Pick = "";
                  var Weave = "";
                  var Dyeingsort = "";
                  var Dyeingshade = "";
                  var Extraends = "";
                  var Pdno = "";
                  var Totalends = "";
                  var Loomtype = "";

                  aData3.map(function (items) {
                    if (valueset === items.Product) {
                      Dent = items.Dent;
                      Reed = items.Reed;
                      Epi = items.Epi;
                      Reedspace = items.Reedspace;
                      Pick = items.Pick;
                      Weave = items.Weave;
                      Dyeingsort = items.Dyeingsort;
                      Dyeingshade = items.Dyeingshade;
                      Extraends = items.Extraends;
                      Pdno = items.Pdno;
                      Totalends = items.Totalends;
                      Loomtype = items.Loomtype;
                    }

                  })

                  reed.setValue(Reed);
                  oInput1.setValue(Dent);
                  oInput2.setValue(Epi);
                  oInput3.setValue(Pick);
                  reedspace.setValue(Reedspace);
                  oInput5.setValue(Weave);
                  oInput6.setValue(Dyeingsort);
                  dyeingshade.setValue(Dyeingshade);
                  PDNO.setValue(Pdno);
                  oInput9.setValue(Extraends);
                  totalends.setValue(Totalends);
                  loomtype.setValue(Loomtype);
                }
                else if (plant === "1300" && dept === "PPC") {
                  // path: "/Mat_Des_FG"
                  var Dent = "";
                  var Reed = "";
                  var Epi = "";
                  var Reedspace = "";
                  var Pick = "";
                  var Weave = "";
                  var Dyeingsort = "";
                  var Dyeingshade = "";
                  var Extraends = "";
                  var Pdno = "";
                  var Totalends = "";
                  var Loomtype = "";

                  aData2.map(function (items) {
                    if (valueset === items.Product) {
                      Dent = items.Dent;
                      Reed = items.Reed;
                      Epi = items.Epi;
                      Reedspace = items.Reedspace;
                      Pick = items.Pick;
                      Weave = items.Weave;
                      Dyeingsort = items.Dyeingsort;
                      Dyeingshade = items.Dyeingshade;
                      Extraends = items.Extraends;
                      Pdno = items.Pdno;
                      Totalends = items.Totalends;
                      Loomtype = items.Loomtype;
                    }

                  })

                  reed.setValue(Reed);
                  oInput1.setValue(Dent);
                  oInput2.setValue(Epi);
                  oInput3.setValue(Pick);
                  reedspace.setValue(Reedspace);
                  oInput5.setValue(Weave);
                  oInput6.setValue(Dyeingsort);
                  dyeingshade.setValue(Dyeingshade);
                  PDNO.setValue(Pdno);
                  oInput9.setValue(Extraends);
                  totalends.setValue(Totalends);
                  loomtype.setValue(Loomtype);


                }
                else if (plant === "1310" && dept === "PPC") {
                  // path: "/Mat_Des_FG"
                  var Dent = "";
                  var Reed = "";
                  var Epi = "";
                  var Reedspace = "";
                  var Pick = "";
                  var Weave = "";
                  var Dyeingsort = "";
                  var Dyeingshade = "";
                  var Extraends = "";
                  var Pdno = "";
                  var Totalends = "";
                  var Loomtype = "";

                  aData2.map(function (items) {
                    if (valueset === items.Product) {
                      Dent = items.Dent;
                      Reed = items.Reed;
                      Epi = items.Epi;
                      Reedspace = items.Reedspace;
                      Pick = items.Pick;
                      Weave = items.Weave;
                      Dyeingsort = items.Dyeingsort;
                      Dyeingshade = items.Dyeingshade;
                      Extraends = items.Extraends;
                      Pdno = items.Pdno;
                      Totalends = items.Totalends;
                      Loomtype = items.Loomtype;
                    }

                  })

                  reed.setValue(Reed);
                  oInput1.setValue(Dent);
                  oInput2.setValue(Epi);
                  oInput3.setValue(Pick);
                  reedspace.setValue(Reedspace);
                  oInput5.setValue(Weave);
                  oInput6.setValue(Dyeingsort);
                  dyeingshade.setValue(Dyeingshade);
                  PDNO.setValue(Pdno);
                  oInput9.setValue(Extraends);
                  totalends.setValue(Totalends);
                  loomtype.setValue(Loomtype);


                }
                else if (dept === "PD") {
                  // path: "/Mat_Des_PD"
                  var Dent = "";
                  var Reed = "";
                  var Epi = "";
                  var Reedspace = "";
                  var Pick = "";
                  var Weave = "";
                  var Dyeingsort = "";
                  var Dyeingshade = "";
                  var Extraends = "";
                  var Pdno = "";
                  var Totalends = "";
                  var Loomtype = "";

                  data1.map(function (items) {
                    if (valueset === items.Product) {
                      Dent = items.Dent;
                      Reed = items.Reed;
                      Epi = items.Epi;
                      Reedspace = items.Reedspace;
                      Pick = items.Pick;
                      Weave = items.Weave;
                      Dyeingsort = items.Dyeingsort;
                      Dyeingshade = items.Dyeingshade;
                      Extraends = items.Extraends;
                      Pdno = items.Pdno;
                      Totalends = items.Totalends;
                      Loomtype = items.Loomtype;
                    }

                  })

                  reed.setValue(Reed);
                  oInput1.setValue(Dent);
                  oInput2.setValue(Epi);
                  oInput3.setValue(Pick);
                  reedspace.setValue(Reedspace);
                  oInput5.setValue(Weave);
                  oInput6.setValue(Dyeingsort);
                  dyeingshade.setValue(Dyeingshade);
                  PDNO.setValue(Pdno);
                  oInput9.setValue(Extraends);
                  totalends.setValue(Totalends);
                  loomtype.setValue(Loomtype);
                }

                if (pno === "") {
                  CODE.setValue(valueset);
                  oInput.setValue(valueset1);
                  this.close();

                  // Call the function with the appropriate parameters
                  that.departmentDataFetch_automatically(valueset, dept, plant);

                }
                else {
                  this.close();
                  CODE.setValue("");
                  oInput.setValue("");
                  MessageBox.error("Master Card is Already Exist For this Quality Code:-  " + valueset + "   Master Card No.:  " + pno);
                }



              },
              cancel: function () {
                this.close();

              }
            });

          }


          var oFilterBar = new sap.ui.comp.filterbar.FilterBar({
            advancedMode: true,
            filterBarExpanded: false,
            filterBarExpanded: true,
            enableBasicSearch: true,
            showGoOnFB: !sap.ui.Device.system.phone,
            filterGroupItems: [new sap.ui.comp.filterbar.FilterGroupItem({ groupTitle: "foo", groupName: "gn1", name: "n1", label: "Product", control: new sap.m.Input() }),
            new sap.ui.comp.filterbar.FilterGroupItem({ groupTitle: "foo", groupName: "gn1", name: "n2", label: "ProductDescription", control: new sap.m.Input() })],




            search: function (oEvt) {
              oBusyDialog.open();
              //  var oParams = oEvt.getParameter("YY1_PACKINGTYPE");
              var Product = oEvt.mParameters.selectionSet[0].mProperties.value;
              var ProductDescription = oEvt.mParameters.selectionSet[1].mProperties.value;

              if (plant === "1200" && dept === "PPC") {
                // if threee no  values 
                if (Product === "" && ProductDescription === "") {
                  oTable.bindRows({
                    path: "/MAT_DES"
                  });
                }
                else if (Product === "") {
                  oTable.bindRows({
                    path: "/MAT_DES", filters: [
                      new sap.ui.model.Filter("ProductDescription", sap.ui.model.FilterOperator.Contains, ProductDescription)]
                  });
                }
                else if (ProductDescription === "") {
                  oTable.bindRows({
                    path: "/MAT_DES", filters: [
                      new sap.ui.model.Filter("Product", sap.ui.model.FilterOperator.Contains, Product)]
                  });
                }
              }


              else if (plant === "1300" && dept === "PPC") {
                if (Product === "" && ProductDescription === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_FG"
                  });
                }
                else if (Product === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_FG", filters: [
                      new sap.ui.model.Filter("ProductDescription", sap.ui.model.FilterOperator.Contains, ProductDescription)]
                  });
                }
                else if (ProductDescription === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_FG", filters: [
                      new sap.ui.model.Filter("Product", sap.ui.model.FilterOperator.Contains, Product)]
                  });
                }
              }
              else if (plant === "1310" && dept === "PPC") {
                if (Product === "" && ProductDescription === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_FG"
                  });
                }
                else if (Product === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_FG", filters: [
                      new sap.ui.model.Filter("ProductDescription", sap.ui.model.FilterOperator.Contains, ProductDescription)]
                  });
                }
                else if (ProductDescription === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_FG", filters: [
                      new sap.ui.model.Filter("Product", sap.ui.model.FilterOperator.Contains, Product)]
                  });
                }
              }
              else if (plant === "2100" && dept === "PPC") {
                if (Product === "" && ProductDescription === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_FG"
                  });
                }
                else if (Product === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_FG", filters: [
                      new sap.ui.model.Filter("ProductDescription", sap.ui.model.FilterOperator.Contains, ProductDescription)]
                  });
                }
                else if (ProductDescription === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_FG", filters: [
                      new sap.ui.model.Filter("Product", sap.ui.model.FilterOperator.Contains, Product)]
                  });
                }
              }

              else if (dept === "PD") {
                if (Product === "" && ProductDescription === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_PD"
                  });
                }
                else if (Product === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_PD", filters: [
                      new sap.ui.model.Filter("ProductDescription", sap.ui.model.FilterOperator.Contains, ProductDescription)]
                  });
                }
                else if (ProductDescription === "") {
                  oTable.bindRows({
                    path: "/Mat_Des_PD", filters: [
                      new sap.ui.model.Filter("Product", sap.ui.model.FilterOperator.Contains, Product)]
                  });
                }
              }


              oBusyDialog.close();
            }
          });

          this._oValueHelpDialog.setFilterBar(oFilterBar);
          var oColModel = new sap.ui.model.json.JSONModel();
          oColModel.setData({
            cols: [
              { label: "Product", template: "Product" },
              { label: "ProductDescription", template: "ProductDescription" }
            ]
          });
          var oTable = this._oValueHelpDialog.getTable();
          oTable.setModel(oColModel, "columns");
          var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZMASTER_CARD_SERVICE_BIN");
          oTable.setModel(oModel);
          oBusyDialog.close();
          this._oValueHelpDialog.open();
        }
      },

    });
  }
);