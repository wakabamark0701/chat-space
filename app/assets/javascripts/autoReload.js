$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
         `<div class="Chat-main__messageinfo" data-message-id=${message.id}>
            <div class="Chat-main__messageinfo-name">
              ${message.user_name}
            </div>
            <div class="Chat-main__messageinfo-daytime">
              ${message.created_at}
            </div>
          </div>
          <div class="Chat-main__message-text">
            ${message.content}
            <img class="Message__image" src="${message.image}">
          </diV>`
      return html;
    } else {
      let html =
          `<div class="Chat-main__messageinfo" data-message-id=${message.id}>
            <div class="Chat-main__messageinfo-name">
              ${message.user_name}
            </div>
            <div class="Chat-main__messageinfo-daytime">
              ${message.created_at}
            </div>
          </div>
          <div class="Chat-main__message-text">
            ${message.content}
          </diV>`
      return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.Chat-main__messageinfo:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.Chat-main__message').append(insertHTML);
        $('.Chat-main__message').animate({ scrollTop: $('.Chat-main__message')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});
