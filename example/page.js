$(document).ready(function(){

	$('#walkthrough').pagewalkthrough({

		steps:
        [
               {
                   wrapper: '',
                   margin: 0,
                   popup:
                   {
                       content: '#type-modal',
                       type: 'modal',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400'
                   },
                   overlay: false         
               },
               {
                   wrapper: '#page-desc',
                   margin: '0',
                   popup:
                   {
                       content: '#type-tooltip',
                       type: 'tooltip',
                       position: 'bottom',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '500'
                   }     
               },
               {
                   wrapper: '#email-us',
                   margin: '0',
                   popup:
                   {
                       content: '#type-tooltip-top',
                       type: 'tooltip',
                       position: 'top',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400'
                   }                
               },
               {
                   wrapper: '#enquiry-type',
                   margin: '0',
                   popup:
                   {
                       content: '#type-tooltip-right',
                       type: 'tooltip',
                       position: 'right',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400'
                   }                
               },
               {
                   wrapper: '#page-desc',
                   margin: '0',
                   popup:
                   {
                       content: '#type-tooltip-bottom',
                       type: 'tooltip',
                       position: 'bottom',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400'
                   }                
               },
               {
                   wrapper: '.content-right',
                   margin: '0',
                   popup:
                   {
                       content: '#type-tooltip-left',
                       type: 'tooltip',
                       position: 'left',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400'
                   }                
               },
               {
                   wrapper: '#page-desc',
                   margin: '0',
                   popup:
                   {
                       content: '#type-no-highlight',
                       type: 'nohighlight',
                       position: 'bottom',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400'
                   }                
               },
               {
                   wrapper: '#enquiry-name',
                   margin: '0',
                   popup:
                   {
                       content: '#tooltip-draggable',
                       type: 'tooltip',
                       position: 'left',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400',
                       draggable: true
                   }                
               },
               {
                   wrapper: '#enquiry-phone',
                   margin: '0',
                   popup:
                   {
                       content: '#nohighlight-draggable',
                       type: 'nohighlight',
                       position: 'top',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400',
                       draggable: true
                   }                
               },
               {
                   wrapper: '#enquiry-email',
                   margin: '0',
                   popup:
                   {
                       content: '#content-rotation',
                       type: 'nohighlight',
                       position: 'bottom',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400',
                       contentRotation: 10
                   }                
               },
               {
                   wrapper: '#enquiry-phone',
                   margin: '0',
                   popup:
                   {
                       content: '#highlight-accessable',
                       type: 'tooltip',
                       position: 'left',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400'
                   },
                   accessable: true                
               },
               {
                   wrapper: '#australia',
                   margin: '0',
                   popup:
                   {
                       content: '#auto-scroll',
                       type: 'nohighlight',
                       position: 'top',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400'
                   },
                   autoScroll: false              
               },
               {
                   wrapper: '.search-box',
                   margin: '0',
                   popup:
                   {
                       content: '#stay-focus',
                       type: 'tooltip',
                       position: 'bottom',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400'
                   },
                   accessable: true,
                   stayFocus: true              
               },
               {
                   wrapper: '',
                   margin: '0',
                   popup:
                   {
                       content: '#done-walkthrough',
                       type: 'modal',
                       position: '',
                       offsetHorizontal: 0,
                       offsetVertical: 0,
                       width: '400'
                   }             
               },

        ],
        name: 'Walkthrough',
        onLoad: true,
        onClose: function(){
            $('.main-menu ul li a#open-walkthrough').removeClass('active');
            return true;
        },
        onCookieLoad: function(){
            alert('This callback executed when onLoad cookie is FALSE');
            return true;
        }

	});


  /***
   * CALLBACK
   **/

   $('#callbacks').pagewalkthrough({
        steps: [
            {
                 wrapper: '',
                 margin: '0',
                 popup:
                 {
                     content: '#callback-beforeshow-aftershow',
                     type: 'modal',
                     position: '',
                     offsetHorizontal: 0,
                     offsetVertical: 0,
                     width: '400'
                 }         
             },
             {
                 wrapper: '',
                 margin: '0',
                 popup:
                 {
                     content: '#callback-restart',
                     type: 'modal',
                     position: '',
                     offsetHorizontal: 0,
                     offsetVertical: 0,
                     width: '400'
                 }         
             },
             {
                 wrapper: '',
                 margin: '0',
                 popup:
                 {
                     content: '#callback-onleave',
                     type: 'modal',
                     position: '',
                     offsetHorizontal: 0,
                     offsetVertical: 0,
                     width: '400'
                 },
                 onLeave: function(){
                    alert("I'm executed on leave this step");
                    return true;
                 }         
             },
             {
                 wrapper: '',
                 margin: '0',
                 popup:
                 {
                     content: '#callback-onenter',
                     type: 'modal',
                     position: '',
                     offsetHorizontal: 0,
                     offsetVertical: 0,
                     width: '400'
                 },
                 onEnter: function(){
                    alert("I'm executed on enter this step");
                    return true;
                 }         
             },
             {
                 wrapper: '',
                 margin: '0',
                 popup:
                 {
                     content: '#callback-onclose',
                     type: 'modal',
                     position: '',
                     offsetHorizontal: 0,
                     offsetVertical: 0,
                     width: '400'
                 }      
             },
             {
                 wrapper: '',
                 margin: '0',
                 popup:
                 {
                     content: '#callback-oncookieload',
                     type: 'modal',
                     position: '',
                     offsetHorizontal: 0,
                     offsetVertical: 0,
                     width: '400'
                 }      
             }
        ],
        name: 'Callback',
        onBeforeShow: function(){
            alert("Hi i'm executed BEFORE this first step shown");
            return true;
        },
        onAfterShow: function(){
            alert("Hi i'm executed AFTER this first step shown");
            return true;
        },
        onRestart: function(){
            alert("I'm executed on walkthrough restart");
            return true;
        },
        onClose: function(){
            if($.pagewalkthrough('currIndex') != 5){
                alert("You can not close before you finish all the walkthrough step");
                return false;
            }

            $('.main-menu ul li a#open-callbacks').removeClass('active');
            return true;
        }
   });


  /***
   * METHODS
   */
   $('#methods').pagewalkthrough({
      steps:[
          {
               wrapper: '',
               margin: '0',
               popup:
               {
                   content: '#method-show',
                   type: 'modal',
                   position: '',
                   offsetHorizontal: 0,
                   offsetVertical: 0,
                   width: '400'
               }      
           },
           {
               wrapper: '',
               margin: '0',
               popup:
               {
                   content: '#method-next',
                   type: 'modal',
                   position: '',
                   offsetHorizontal: 0,
                   offsetVertical: 0,
                   width: '400'
               }      
           },
           {
               wrapper: '',
               margin: '0',
               popup:
               {
                   content: '#method-prev',
                   type: 'modal',
                   position: '',
                   offsetHorizontal: 0,
                   offsetVertical: 0,
                   width: '400'
               }      
           },
           {
               wrapper: '',
               margin: '0',
               popup:
               {
                   content: '#method-restart',
                   type: 'modal',
                   position: '',
                   offsetHorizontal: 0,
                   offsetVertical: 0,
                   width: '400'
               }      
           },
           {
               wrapper: '',
               margin: '0',
               popup:
               {
                   content: '#method-close',
                   type: 'modal',
                   position: '',
                   offsetHorizontal: 0,
                   offsetVertical: 0,
                   width: '400'
               }      
           },
           {
               wrapper: '',
               margin: '0',
               popup:
               {
                   content: '#method-ispagewalkthroughactive',
                   type: 'modal',
                   position: '',
                   offsetHorizontal: 0,
                   offsetVertical: 0,
                   width: '400'
               }      
           },
           {
               wrapper: '',
               margin: '0',
               popup:
               {
                   content: '#method-currindex',
                   type: 'modal',
                   position: '',
                   offsetHorizontal: 0,
                   offsetVertical: 0,
                   width: '400'
               }      
           },
           {
               wrapper: '',
               margin: '0',
               popup:
               {
                   content: '#method-getoptions',
                   type: 'modal',
                   position: '',
                   offsetHorizontal: 0,
                   offsetVertical: 0,
                   width: '400'
               }      
           }
      ],
      name: 'Methods',
      onClose: function(){
          $('.main-menu ul li a#open-methods').removeClass('active');
          return true;
      }
   });


  /***
   * EXTRA
   */
  $('#extra').pagewalkthrough({
      steps:[
          {
               wrapper: '#page-desc',
               margin: '0',
               popup:
               {
                   content: '#ex-image',
                   type: 'tooltip',
                   position: 'bottom',
                   offsetHorizontal: 0,
                   offsetVertical: 0,
                   width: '400'
               }      
           },
           {
               wrapper: '.content-right',
               margin: '0',
               popup:
               {
                   content: '#ex-video',
                   type: 'tooltip',
                   position: 'left',
                   offsetHorizontal: 0,
                   offsetVertical: 0,
                   width: '560'
               }      
           },
           {
               wrapper: '#enquiry-phone',
               margin: '0',
               popup:
               {
                   content: '#ex-validation',
                   type: 'tooltip',
                   position: 'bottom',
                   offsetHorizontal: 0,
                   offsetVertical: 0,
                   width: '560'
               },
               accessable:true,
               onLeave: function(){
                    var phone = $('#enquiry-phone input').val();

                    if(phone.length > 0){

                      if($.isNumeric(phone)){
                        return true;
                      }else{
                        alert('Please fill valid phone number!!');
                        return false;
                      }
                    }else{
                      alert('Phone number can not be empty!');
                      return false;
                    }
               }      
           },
           {
               wrapper: '',
               margin: '0',
               popup:
               {
                   content: '#ex-done',
                   type: 'modal',
                   position: '',
                   offsetHorizontal: 0,
                   offsetVertical: 0,
                   width: '400'
               }      
           }
      ],
      name:'Extra',
      onClose: function(){
          $('.main-menu ul li a#open-extra').removeClass('active');
          return true;
      }
  }); 

	/***
   * NAVIGATION
   */

	$('.main-menu ul li a').each(function(){
      $('.main-menu ul li').find('a.active').removeClass('active');
      $(this).live('click', function(){
          $(this).addClass('active');
          var id = $(this).attr('id').split('-');

          if(id == 'parameters') return;

          $.pagewalkthrough('show', id[1]); 
      });
  });


  $('.prev-step').live('click', function(e){
      $.pagewalkthrough('prev',e);
  });

  $('.next-step').live('click', function(e){
      $.pagewalkthrough('next',e);
  });

  $('.restart-step').live('click', function(e){
      $.pagewalkthrough('restart',e);
  });

  $('.close-step').live('click', function(e){
      $.pagewalkthrough('close');
  });

});