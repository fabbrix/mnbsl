Ext.onReady(function(){MODx.load({xtype:"modx-page-context-update",context:MODx.request.key});});MODx.page.UpdateContext=function(A){A=A||{};Ext.applyIf(A,{formpanel:"modx-panel-context",actions:{"new":MODx.action["context/create"],edit:MODx.action["context/update"],"delete":MODx.action["context/delete"],cancel:MODx.action["context/view"]},buttons:[{process:"update",text:_("save"),method:"remote",checkDirty:true,keys:[{key:MODx.config.keymap_save||"s",ctrl:true}]},"-",{process:"cancel",text:_("cancel"),params:{a:MODx.action.context}},"-",{text:_("help_ex"),handler:MODx.loadHelpPane}],components:[{xtype:"modx-panel-context",renderTo:"modx-panel-context-div",context:A.context}]});MODx.page.UpdateContext.superclass.constructor.call(this,A);};Ext.extend(MODx.page.UpdateContext,MODx.Component);Ext.reg("modx-page-context-update",MODx.page.UpdateContext);