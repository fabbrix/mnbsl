MODx.tree.Menu=function(A){A=A||{};Ext.applyIf(A,{root_id:"n_",root_name:_("menu_top"),rootVisible:true,expandFirst:true,enableDrag:true,enableDrop:true,url:MODx.config.connectors_url+"system/menu.php",action:"getNodes",primaryKey:"text",useDefaultToolbar:true,ddGroup:"modx-menu",tbar:[{text:_("menu_create"),handler:this.createMenu,scope:this}]});MODx.tree.Menu.superclass.constructor.call(this,A);};Ext.extend(MODx.tree.Menu,MODx.tree.Tree,{windows:{},createMenu:function(C,B){var A={};if(this.cm&&this.cm.activeNode&&this.cm.activeNode.attributes&&this.cm.activeNode.attributes.data){A.parent=this.cm.activeNode.attributes.data.text;}if(!this.windows.create_menu){this.windows.create_menu=MODx.load({xtype:"modx-window-menu-create",record:A,listeners:{success:{fn:function(D){this.refresh();},scope:this}}});}this.windows.create_menu.setValues(A);this.windows.create_menu.show(B.target);},updateMenu:function(C,B){var A=this.cm.activeNode.attributes.data;Ext.apply(A,{action_id:A.action,new_text:A.text});if(!this.windows.update_menu){this.windows.update_menu=MODx.load({xtype:"modx-window-menu-update",record:A,listeners:{success:{fn:function(D){this.refresh();},scope:this}}});}this.windows.update_menu.setValues(A);this.windows.update_menu.show(B.target);},removeMenu:function(B,A){MODx.msg.confirm({title:_("warning"),text:_("menu_confirm_remove"),url:this.config.url,params:{action:"remove",text:this.cm.activeNode.attributes.pk},listeners:{success:{fn:this.refresh,scope:this}}});},getMenu:function(C,B){var A=[];switch(C.attributes.type){case"menu":A.push({text:_("menu_update"),handler:this.updateMenu});A.push("-");A.push({text:_("action_place_here"),handler:this.createMenu});A.push("-");A.push({text:_("menu_remove"),handler:this.removeMenu});break;default:A.push({text:_("menu_create"),handler:this.createMenu});break;}return A;}});Ext.reg("modx-tree-menu",MODx.tree.Menu);MODx.window.CreateMenu=function(A){A=A||{};Ext.applyIf(A,{title:_("menu_create"),width:480,height:400,url:MODx.config.connectors_url+"system/menu.php",action:"create",fields:[{xtype:"hidden",name:"parent"},{fieldLabel:_("lexicon_key"),name:"text",xtype:"textfield",allowBlank:false,anchor:"90%"},{fieldLabel:_("description"),name:"description",xtype:"textfield",allowBlank:true,anchor:"90%"},{fieldLabel:_("action"),name:"action_id",hiddenName:"action_id",xtype:"modx-combo-action",id:"modx-cmen-action",anchor:"90%"},{fieldLabel:_("icon"),name:"icon",xtype:"textfield",allowBlank:true,anchor:"90%"},{fieldLabel:_("parameters"),name:"params",xtype:"textfield",anchor:"90%"},{fieldLabel:_("handler"),name:"handler",xtype:"textarea",anchor:"90%",grow:false},{fieldLabel:_("permissions"),name:"permissions",xtype:"textfield",anchor:"90%"}]});MODx.window.CreateMenu.superclass.constructor.call(this,A);};Ext.extend(MODx.window.CreateMenu,MODx.Window);Ext.reg("modx-window-menu-create",MODx.window.CreateMenu);MODx.window.UpdateMenu=function(A){A=A||{};Ext.applyIf(A,{title:_("menu_update"),width:480,height:400,url:MODx.config.connectors_url+"system/menu.php",action:"update",fields:[{name:"parent",xtype:"hidden"},{name:"text",xtype:"hidden"},{fieldLabel:_("lexicon_key"),name:"new_text",xtype:"textfield",allowBlank:false,width:200},{fieldLabel:_("description"),name:"description",xtype:"textfield",allowBlank:true,width:200},{fieldLabel:_("action"),name:"action_id",hiddenName:"action_id",xtype:"modx-combo-action",id:"modx-umen-action"},{fieldLabel:_("icon"),name:"icon",xtype:"textfield",allowBlank:true,width:200},{fieldLabel:_("parameters"),name:"params",xtype:"textfield",width:200},{fieldLabel:_("handler"),name:"handler",xtype:"textarea",width:320,grow:false},{fieldLabel:_("permissions"),name:"permissions",xtype:"textfield",width:200}]});MODx.window.UpdateMenu.superclass.constructor.call(this,A);};Ext.extend(MODx.window.UpdateMenu,MODx.Window);Ext.reg("modx-window-menu-update",MODx.window.UpdateMenu);MODx.combo.Menu=function(A){A=A||{};Ext.applyIf(A,{name:"menu",hiddenName:"menu",url:MODx.config.connectors_url+"system/menu.php",fields:["text","text_lex"],displayField:"text_lex",valueField:"text",listWidth:300,editable:false});MODx.combo.Menu.superclass.constructor.call(this,A);};Ext.extend(MODx.combo.Menu,MODx.combo.ComboBox);Ext.reg("modx-combo-menu",MODx.combo.Menu);