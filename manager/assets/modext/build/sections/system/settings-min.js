Ext.onReady(function(){MODx.add("modx-page-system-settings");});MODx.page.SystemSettings=function(A){A=A||{};Ext.applyIf(A,{components:[{xtype:"modx-panel-system-settings"}],buttons:[{text:_("help_ex"),handler:MODx.loadHelpPane}]});MODx.page.SystemSettings.superclass.constructor.call(this,A);};Ext.extend(MODx.page.SystemSettings,MODx.Component);Ext.reg("modx-page-system-settings",MODx.page.SystemSettings);