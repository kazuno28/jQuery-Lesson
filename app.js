$(function (){
  $('.box1').slideDown(function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});

// <jQueryの書き方>
// ・jQueryを使うには、HTMLと紐づけする必要がある。
// 　　→HTMLの読み込みが終わってからjQueryが実行されるように記述する必要がある。
/* (読み込ませる記述例)
$(document).ready(function() {
  jQueryプログラムの内容
}
*/
/* (省略形)
$(function(){
  jQueryプログラムの内容
});
*/
// <処理内容の記述>
//  $(セレクタ).メソッド(パラメータ);
//
// ・「セレクタ」は、操作の対象になる部分。上記コードではbodyがセレクタ。
// ・「メソッド」は、何を行うのかを記述する。上記コードではhtmlがメソッド。
//
// メソッドにパラメータを指定すると、その内容に書き換えられ、パラメータを指定しない場合には、メソッドが取得される。
//
// ・セレクタ……　body
// ・メソッド……　html
// ・パラメータ……　'<h1>Hello JQuery!!</h1>'
//
// jQueryでは、セレクタとメソッド、さらにパラメータを用いて、「どこに対して何を行うか」を記述している。
// 今回のコードでは、「bodyタグ内のHTMLを、<h1>Hello JQuery!!</h1>で書き換えなさい」という意味になる。


// <CSSの記述>
// ・1つのCSSお記述するときは、プロパティと値をそれぞれ「'」で囲み、間を「,」で区切る書き方をする。
// ex)  $('セレクタ').css('background-color','#0000FF');
// 
// ・複数プロパティを指定する場合
/* 
$('セレクタ').css({
  'プロパティ1': '値1',
  'プロパティ2': '値2',
  :
  'プロパティn': '値n'
}); 
*/


// <アニメーション>
// ・上から下へスライド
/* 
$(function(){
  $('.box1').slideDown();
}); 
*/
// 下から上へスライド
/* 
$(function(){
  $('.box1').slideUp();
}); 
*/

// <要素を表示・非表示する>
// ・非表示の要素をjQueryで表示させる
/* 
$(function(){
  $('.box1').show();
  $('.box1').css({'background-color': '#0000FF'});
}); 
*/
// ・示されている要素をjQueryで非表示にする
/* 
$(function(){
  $('.box1').hide();
}); 
*/
// .slideDown();、.slideUp();、.show();、.hide();の4つを使えるようになると、さまざまなスタイルに応用できる。


// <練習問題>（1番上）
// javascriptでは、引数の中に関数を入れることができる。
// slideDown()の引数にfunctionを書き加えることで、スライドダウンした後にfunctionを実行することができるようになる。
// よって、slideDownの中のfunctionに、cssで色と大きさを変え、slideUp()をすることで要件を満たすことができる。
