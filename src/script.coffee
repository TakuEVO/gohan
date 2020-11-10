$('#quiz').quiz({
  resultsScreen: '#results-screen',
  counter: false,
  homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'パソコンは得意ですか？',
      'options': [
        'Yes',
        'No'
      ],
      'correctIndex': 0,
      'correctResponse': 'すごい！',
      'incorrectResponse': '将来のために少しずつ勉強しよう！'
    },
    {
      'q': 'ITに興味ありますか?',
      'options': [
        'YES',
        'NO',
      ],
      'correctIndex': 0,
      'correctResponse': '現代人ですね！',
      'incorrectResponse': 'ITは難しいよね。。。'
    },
    {
      'q': 'チームでの活動は好きですか',
      'options': [
        'YES',
        'NO'
      ],
      'correctIndex': 0,
      'correctResponse': '社交的だね',
      'incorrectResponse': '一人の時間も大事だよね'
    },
    {
      'q': 'ITにとって『JS』とはなんですか?',
      'options': [
        '女子小学生',
      'JavaScript'
      ],
      'correctIndex': 1,
      'correctResponse': '正解！',
      'incorrectResponse': '違うよ！'
    }
  ]
});