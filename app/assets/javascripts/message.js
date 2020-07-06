$(function(){
    function buildHTML(message){
      if ( message.image ) {
        let html =
          `<div class="Chat-main__messageinfo">
              <div class="Chat-main__messageinfo-name">
                ${message.user_name}
              </div>
              <div class="Chat-main__messageinfo-daytime">
                ${message.created_at}
              </div>
            </div>
            <div class="Chat-main__message-text">
                ${message.content}
              </p>
              <img class="Message__image" src="${message.image}">
            </div>
          `
        return html;
      } else {
        let html =
        `<div class="Chat-main__messageinfo">
          <div class="Chat-main__messageinfo-name">
            ${message.user_name}
          </div>
          <div class="Chat-main__messageinfo-daytime">
            ${message.created_at}
          </div>
        </div>
        <div class="Chat-main__message-text">
            ${message.content}
          </div>
        `
        return html;
      };
    }


  $('.Chat-main__post-contents').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');

    $.ajax({
      url:  url,
      type: "post",  //同期通信でいう『HTTPメソッド』
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__message').append(html)
      $('.Chat-main__message').animate({ scrollTop: $('.Chat-main__message')[0].scrollHeight});
      $('.Chat-main__post-contents')[0].reset(); 
      $('.Chat-main__post-send').attr('disabled', false);　
    })
  });
});


