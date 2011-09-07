MODx.panel.Chunk=function(A){A=A||{};Ext.applyIf(A,{url:MODx.config.connectors_url+"element/chunk.php",baseParams:{},id:"modx-panel-chunk",class_key:"modChunk",chunk:"",bodyStyle:"",items:[{html:"<h2>"+_("chunk_new")+"</h2>",border:false,cls:"modx-page-header",id:"modx-chunk-header"},MODx.getPageStructure([{title:_("chunk_title"),bodyStyle:"padding: 15px;",defaults:{border:false,msgTarget:"side"},layout:"form",id:"modx-chunk-form",labelWidth:150,items:[{html:"<p>"+_("chunk_msg")+"</p>",id:"modx-chunk-msg",border:false},{xtype:"hidden",name:"id",id:"modx-chunk-id",value:A.record.id||MODx.request.id},{xtype:"hidden",name:"props",id:"modx-chunk-props",value:A.record.props||null},{xtype:"textfield",fieldLabel:_("name"),name:"name",id:"modx-chunk-name",width:300,maxLength:255,enableKeyEvents:true,allowBlank:false,value:A.record.name,listeners:{keyup:{scope:this,fn:function(B,C){Ext.getCmp("modx-chunk-header").getEl().update("<h2>"+_("chunk")+": "+B.getValue()+"</h2>");}}}},{xtype:"textfield",fieldLabel:_("description"),name:"description",id:"modx-chunk-description",width:300,maxLength:255,value:A.record.description},{xtype:"modx-combo-category",fieldLabel:_("category"),name:"category",id:"modx-chunk-category",width:250,value:A.record.category||0},{xtype:"xcheckbox",fieldLabel:_("chunk_lock"),description:_("chunk_lock_msg"),name:"locked",id:"modx-chunk-locked",inputValue:true,checked:A.record.locked||0},{xtype:"xcheckbox",fieldLabel:_("clear_cache_on_save"),description:_("clear_cache_on_save_msg"),name:"clearCache",id:"modx-chunk-clear-cache",inputValue:1,checked:Ext.isDefined(A.record.clearCache)||true},{html:MODx.onChunkFormRender,border:false},{html:"<br />"+_("chunk_code"),border:false},{xtype:"textarea",hideLabel:true,name:"snippet",id:"modx-chunk-snippet",width:"95%",height:400,value:A.record.snippet||""}]},{xtype:"modx-panel-element-properties",elementPanel:"modx-panel-chunk",elementId:A.chunk,elementType:"modChunk"}],{id:"modx-chunk-tabs"})],useLoadingMask:true,listeners:{setup:{fn:this.setup,scope:this},success:{fn:this.success,scope:this},beforeSubmit:{fn:this.beforeSubmit,scope:this}}});MODx.panel.Chunk.superclass.constructor.call(this,A);setTimeout("Ext.getCmp('modx-element-tree').expand();",1000);};Ext.extend(MODx.panel.Chunk,MODx.FormPanel,{initialized:false,setup:function(){if(!this.initialized){this.getForm().setValues(this.config.record);}if(!Ext.isEmpty(this.config.record.name)){Ext.getCmp("modx-chunk-header").getEl().update("<h2>"+_("chunk")+": "+this.config.record.name+"</h2>");}if(!Ext.isEmpty(this.config.record.properties)){var B=this.config.record.properties;var A=Ext.getCmp("modx-grid-element-properties");if(A){A.defaultProperties=B;A.getStore().loadData(B);}}this.fireEvent("ready",this.config.record);if(MODx.onLoadEditor){MODx.onLoadEditor(this);}this.clearDirty();this.initialized=true;MODx.fireEvent("ready");return true;},beforeSubmit:function(A){this.cleanupEditor();Ext.apply(A.form.baseParams,{propdata:Ext.getCmp("modx-grid-element-properties").encode()});return this.fireEvent("save",{values:this.getForm().getValues(),stay:MODx.config.stay});},success:function(B){if(MODx.request.id){Ext.getCmp("modx-grid-element-properties").save();}this.getForm().setValues(B.result.object);var D=Ext.getCmp("modx-chunk-category").getValue();var C=D!==""&&D!==null?"n_chunk_category_"+D:"n_type_chunk";var A=Ext.getCmp("modx-element-tree");if(A){A.refreshNode(C,true);}},cleanupEditor:function(){if(MODx.onSaveEditor){var A=Ext.getCmp("modx-chunk-snippet");MODx.onSaveEditor(A);}}});Ext.reg("modx-panel-chunk",MODx.panel.Chunk);