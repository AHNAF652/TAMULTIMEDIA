﻿window.globalProvideData('slide', '{"title":"KUIs","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":5,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide5","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5VAfiRdsGWX","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6aPjtyCAzBI.5nrwst7zYGB.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6aPjtyCAzBI.6MGgSvKT7pM.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.6WnKRLbdMvI"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6gvhFrzm6D3.InvalidPromptSlide"}}]}]},"ReviewInt_6aPjtyCAzBI":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6aPjtyCAzBI.5nrwst7zYGB"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6aPjtyCAzBI.6MGgSvKT7pM"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6WnKRLbdMvI.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6aPjtyCAzBI_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6aPjtyCAzBI_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6aPjtyCAzBI","typea":"var","valueb":"6GMKgMzEGra","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6GMKgMzEGra.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6aPjtyCAzBI"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6GMKgMzEGra.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6aPjtyCAzBI"}]}]}]},"ReviewIntCorrectIncorrect_6aPjtyCAzBI":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6aPjtyCAzBI.5nrwst7zYGB.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6aPjtyCAzBI.5nrwst7zYGB"}}]},{"kind":"adjustvar","variable":"6aPjtyCAzBI.5nrwst7zYGB._hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"6aPjtyCAzBI.5nrwst7zYGB._down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"6aPjtyCAzBI.5nrwst7zYGB._disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"6aPjtyCAzBI.5nrwst7zYGB.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"6aPjtyCAzBI.5nrwst7zYGB"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6aPjtyCAzBI.6MGgSvKT7pM"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6aPjtyCAzBI":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6aPjtyCAzBI"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_6aPjtyCAzBI":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"6aPjtyCAzBI.5nrwst7zYGB.ActGrpSetDisabledState"},{"kind":"exe_actiongroup","id":"6aPjtyCAzBI.6MGgSvKT7pM.ActGrpSetDisabledState"}]},"6aPjtyCAzBI_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6WnKRLbdMvI.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6GMKgMzEGra.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6aPjtyCAzBI"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6WnKRLbdMvI.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6WnKRLbdMvI.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6aPjtyCAzBI"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_5VAfiRdsGWX":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6gzqdCA41xH"}}]},"NavigationRestrictionPreviousSlide_5VAfiRdsGWX":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6gvhFrzm6D3","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6gvhFrzm6D3","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6aPjtyCAzBI","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6aPjtyCAzBI"}],"elseActions":[{"kind":"exe_actiongroup","id":"6aPjtyCAzBI_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6aPjtyCAzBI","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6aPjtyCAzBI","typea":"var","valueb":"6GMKgMzEGra","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6GMKgMzEGra"},"completed_slide_ref":{"type":"string","value":"_player.5aaiaoFyFjn.5Ws2ditLvxm"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6aPjtyCAzBI","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6aPjtyCAzBI","typea":"var","valueb":"6GMKgMzEGra","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6GMKgMzEGra"},"completed_slide_ref":{"type":"string","value":"_player.5aaiaoFyFjn.5Ws2ditLvxm"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5VAfiRdsGWX"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5VAfiRdsGWX"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qV9dHsr0nL"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6aPjtyCAzBI"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6aPjtyCAzBI.6MGgSvKT7pM"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6aPjtyCAzBI.5nrwst7zYGB"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"63wmMVyuxwR"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6oSJ1EYvlRF"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Up2XUP9fii"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6K0cKbQ6CA6"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":15,"id":"01","url":"story_content/6qxFcxYSSHh.png","type":"normal","altText":"Colourful Cartoon Elementary Classroom Rules Educational Presentation (6).png","width":1440,"height":810,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":-2,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":272,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":544,"altText":"Colourful Cartoon Elementary Classroom Rules Educational Presentation (6).png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":544,"strokewidth":0}},"width":720,"height":544,"resume":true,"useHandCursor":true,"id":"6qV9dHsr0nL"},{"kind":"scrollarea","contentwidth":272,"contentheight":86,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"65RpwDOIypc_1432999003","id":"01","linkId":"txt__default_6MGgSvKT7pM","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":185,"height":19,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"False","style":{"fontFamily":"\\"Arial Rounded MT BoBoldAD39CAD8\\",\\"Arial Rounded MT Bold\\",\\"Arial Rounded MT\\"","ascent":15.141,"descent":3.375,"leading":0,"underlinePosition":-1.602,"underlineThickness":0.797,"xHeight":8.477}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":5,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":85,"bottom":31,"pngfb":false,"pr":{"l":"Lib","i":51}}}],"shapemaskId":"","xPos":24,"yPos":43,"tabIndex":5,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":124,"rotateYPos":21.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":45}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":45}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":45}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":47}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":47}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":47}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":49}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":49}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":49}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":50}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":50}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":50}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}}],"width":248,"height":43,"resume":true,"useHandCursor":true,"id":"6MGgSvKT7pM","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5nrwst7zYGB.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5nrwst7zYGB._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5nrwst7zYGB"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6kK3TQaPoWX_1322626300","id":"01","linkId":"txt__default_5nrwst7zYGB","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":185,"height":19,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"True","style":{"fontFamily":"\\"Arial Rounded MT BoBoldAD39CAD8\\",\\"Arial Rounded MT Bold\\",\\"Arial Rounded MT\\"","ascent":15.141,"descent":3.375,"leading":0,"underlinePosition":-1.602,"underlineThickness":0.797,"xHeight":8.477}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":4,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":80,"bottom":31,"pngfb":false,"pr":{"l":"Lib","i":52}}}],"shapemaskId":"","xPos":24,"yPos":0,"tabIndex":4,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":124,"rotateYPos":21.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":45}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":45}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-9,"top":-1,"right":248,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":46}},"html5data":{"xPos":-9,"yPos":-1,"width":257,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Disabled_Review","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-9,"top":-1,"right":248,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":46}},"html5data":{"xPos":-9,"yPos":-1,"width":257,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":45}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":47}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":47}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Review","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-9,"top":-1,"right":248,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":48}},"html5data":{"xPos":-9,"yPos":-1,"width":257,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled_Review","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-9,"top":-1,"right":248,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":48}},"html5data":{"xPos":-9,"yPos":-1,"width":257,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":47}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":49}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":49}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":49}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":50}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":50}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":248,"bottom":43,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":50}},"html5data":{"xPos":-1,"yPos":-1,"width":249,"height":44,"strokewidth":3}}}],"width":248,"height":43,"resume":true,"useHandCursor":true,"id":"5nrwst7zYGB","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6MGgSvKT7pM.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6MGgSvKT7pM._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6MGgSvKT7pM"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":false,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":56,"yPos":222,"tabIndex":3,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":124,"rotateYPos":48,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":248,"height":96,"strokewidth":0}},"width":272,"height":96,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":272,"bottom":96,"altText":"True/False","pngfb":false,"pr":{"l":"Lib","i":44}}},"id":"6aPjtyCAzBI"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"63wmMVyuxwR_-1535787559","id":"01","linkId":"txt__default_63wmMVyuxwR","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":324,"height":112,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Pernyataan terakhir dalam Surat An-Nasr mendorong umat Islam untuk bertasbih dan meminta ampunan kepada Allah setelah menerima kemenangan.","style":{"fontFamily":"\\"Arial Rounded MT BoBoldAD39CAD8\\",\\"Arial Rounded MT Bold\\",\\"Arial Rounded MT\\"","fontSize":12,"ascent":15.141,"descent":3.375,"leading":0,"underlinePosition":-1.602,"underlineThickness":0.797,"xHeight":8.477}}],"style":{"lineSpacingRule":"singlePt5","lineSpacing":30,"tagType":"P"},"runs":[{"idx":0,"len":138,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":336,"bottom":115,"pngfb":false,"pr":{"l":"Lib","i":63}}}],"shapemaskId":"","xPos":72,"yPos":94,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":172,"rotateYPos":61,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":344,"bottom":122,"altText":"Pernyataan terakhir dalam Surat An-Nasr mendorong umat Islam untuk bertasbih dan meminta ampunan kepada Allah setelah menerima kemenangan.","pngfb":false,"pr":{"l":"Lib","i":61}},"html5data":{"xPos":0,"yPos":0,"width":344,"height":122,"strokewidth":0}},"width":344,"height":122,"resume":true,"useHandCursor":true,"id":"63wmMVyuxwR"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":16,"id":"01","url":"story_content/6OBULnOw0ch_9E0B0E.png","type":"normal","altText":"Cuplikan layar 2024-12-25 234158.png","width":142,"height":137,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":616,"yPos":14,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":41.5,"rotateYPos":40,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":84,"bottom":80,"altText":"Cuplikan layar 2024-12-25 234158.png","pngfb":false,"pr":{"l":"Lib","i":55}},"html5data":{"xPos":-1,"yPos":-1,"width":85,"height":81,"strokewidth":0}},"width":83,"height":80,"resume":true,"useHandCursor":true,"id":"6oSJ1EYvlRF","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5aaiaoFyFjn.6QfeAATiLmJ"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5aaiaoFyFjn.6QfeAATiLmJ"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":17,"id":"01","url":"story_content/6BrY4OD8PVt_9E0B0E.png","type":"normal","altText":"Cuplikan layar 2024-12-25 233922.png","width":141,"height":131,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":168,"yPos":446,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":38.5,"rotateYPos":36,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":78,"bottom":72,"altText":"Cuplikan layar 2024-12-25 233922.png","pngfb":false,"pr":{"l":"Lib","i":56}},"html5data":{"xPos":-1,"yPos":-1,"width":79,"height":73,"strokewidth":0}},"width":77,"height":72,"resume":true,"useHandCursor":true,"id":"6Up2XUP9fii","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5aaiaoFyFjn.6gzqdCA41xH"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5aaiaoFyFjn.6gzqdCA41xH"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":18,"id":"01","url":"story_content/6BrY4OD8PVt_XY_9E0B0E.png","type":"normal","altText":"Cuplikan layar 2024-12-25 233922.png","width":141,"height":131,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":75,"yPos":446,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":38.5,"rotateYPos":36,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":78,"bottom":72,"altText":"Cuplikan layar 2024-12-25 233922.png","pngfb":false,"pr":{"l":"Lib","i":56}},"html5data":{"xPos":-1,"yPos":-1,"width":79,"height":73,"strokewidth":0}},"width":77,"height":72,"resume":true,"useHandCursor":true,"id":"6K0cKbQ6CA6","events":[{"kind":"onrelease","actions":[{"kind":"history_prev"},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5aaiaoFyFjn.6lTTKxme6KF"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6aPjtyCAzBI_CorrectReview","id":"01","linkId":"6aPjtyCAzBI_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":58}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":57}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6aPjtyCAzBI_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6aPjtyCAzBI_IncorrectReview","id":"01","linkId":"6aPjtyCAzBI_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":60}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":59}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6aPjtyCAzBI_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');