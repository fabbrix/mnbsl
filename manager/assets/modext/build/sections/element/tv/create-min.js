MODx.page.CreateTV=function(A){A=A||{};Ext.applyIf(A,{formpanel:"modx-panel-tv",actions:{"new":MODx.action["element/tv/create"],edit:MODx.action["element/tv/update"],cancel:MODx.action.welcome},buttons:[{process:"create",text:_("save"),method:"remote",checkDirty:true,keys:[{key:MODx.config.keymap_save||"s",ctrl:true}]},"-",{process:"cancel",text:_("cancel"),params:{a:MODx.action.welcome}},"-",{text:_("help_ex"),handler:MODx.loadHelpPane}],loadStay:true,components:[{xtype:"modx-panel-tv",renderTo:"modx-panel-tv-div",record:A.record||{}}]});MODx.page.CreateTV.superclass.constructor.call(this,A);};Ext.extend(MODx.page.CreateTV,MODx.Component);Ext.reg("modx-page-tv-create",MODx.page.CreateTV);