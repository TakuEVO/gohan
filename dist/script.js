(function() {
  $('#quiz').quiz({
    resultsScreen: '#results-screen',
    counter: false,
    homeButton: '#custom-home',
    counterFormat: 'Question %current of %total',
    questions: [
      {
        'q': 'パソコンは得意ですか？',
        'options': ['Yes',
      'No'],
        'correctIndex': 0,
        'correctResponse': 'すごい！',
        'incorrectResponse': '将来のために少しずつ勉強しよう！'
      },
      {
        'q': 'ITに興味ありますか?',
        'options': ['YES',
      'NO'],
        'correctIndex': 0,
        'correctResponse': '現代人ですね！',
        'incorrectResponse': 'ITは難しいよね。。。'
      },
      {
        'q': 'チームでの活動は好きですか',
        'options': ['YES',
      'NO'],
        'correctIndex': 0,
        'correctResponse': '社交的だね',
        'incorrectResponse': '一人の時間も大事だよね'
      },
      {
        'q': 'ITにとって『JS』とはなんですか?',
        'options': ['女子小学生',
      'JavaScript'],
        'correctIndex': 1,
        'correctResponse': '正解！',
        'incorrectResponse': '違うよ！'
      }
    ]
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsT0FBRixDQUFVLENBQUMsSUFBWCxDQUFnQjtJQUNkLGFBQUEsRUFBZSxpQkFERDtJQUVkLE9BQUEsRUFBUyxLQUZLO0lBR2QsVUFBQSxFQUFZLGNBSEU7SUFJZCxhQUFBLEVBQWUsNkJBSkQ7SUFLZCxTQUFBLEVBQVc7TUFDVDtRQUNFLEdBQUEsRUFBSyxhQURQO1FBRUUsU0FBQSxFQUFXLENBQ1QsS0FEUztNQUVULElBRlMsQ0FGYjtRQU1FLGNBQUEsRUFBZ0IsQ0FObEI7UUFPRSxpQkFBQSxFQUFtQixNQVByQjtRQVFFLG1CQUFBLEVBQXFCO01BUnZCLENBRFM7TUFXVDtRQUNFLEdBQUEsRUFBSyxhQURQO1FBRUUsU0FBQSxFQUFXLENBQ1QsS0FEUztNQUVULElBRlMsQ0FGYjtRQU1FLGNBQUEsRUFBZ0IsQ0FObEI7UUFPRSxpQkFBQSxFQUFtQixTQVByQjtRQVFFLG1CQUFBLEVBQXFCO01BUnZCLENBWFM7TUFxQlQ7UUFDRSxHQUFBLEVBQUssZUFEUDtRQUVFLFNBQUEsRUFBVyxDQUNULEtBRFM7TUFFVCxJQUZTLENBRmI7UUFNRSxjQUFBLEVBQWdCLENBTmxCO1FBT0UsaUJBQUEsRUFBbUIsT0FQckI7UUFRRSxtQkFBQSxFQUFxQjtNQVJ2QixDQXJCUztNQStCVDtRQUNFLEdBQUEsRUFBSyxvQkFEUDtRQUVFLFNBQUEsRUFBVyxDQUNULE9BRFM7TUFFWCxZQUZXLENBRmI7UUFNRSxjQUFBLEVBQWdCLENBTmxCO1FBT0UsaUJBQUEsRUFBbUIsS0FQckI7UUFRRSxtQkFBQSxFQUFxQjtNQVJ2QixDQS9CUzs7RUFMRyxDQUFoQjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiJCgnI3F1aXonKS5xdWl6KHtcbiAgcmVzdWx0c1NjcmVlbjogJyNyZXN1bHRzLXNjcmVlbicsXG4gIGNvdW50ZXI6IGZhbHNlLFxuICBob21lQnV0dG9uOiAnI2N1c3RvbS1ob21lJyxcbiAgY291bnRlckZvcm1hdDogJ1F1ZXN0aW9uICVjdXJyZW50IG9mICV0b3RhbCcsXG4gIHF1ZXN0aW9uczogW1xuICAgIHtcbiAgICAgICdxJzogJ+ODkeOCveOCs+ODs+OBr+W+l+aEj+OBp+OBmeOBi++8nycsXG4gICAgICAnb3B0aW9ucyc6IFtcbiAgICAgICAgJ1llcycsXG4gICAgICAgICdObydcbiAgICAgIF0sXG4gICAgICAnY29ycmVjdEluZGV4JzogMCxcbiAgICAgICdjb3JyZWN0UmVzcG9uc2UnOiAn44GZ44GU44GE77yBJyxcbiAgICAgICdpbmNvcnJlY3RSZXNwb25zZSc6ICflsIbmnaXjga7jgZ/jgoHjgavlsJHjgZfjgZrjgaTli4nlvLfjgZfjgojjgYbvvIEnXG4gICAgfSxcbiAgICB7XG4gICAgICAncSc6ICdJVOOBq+iIiOWRs+OBguOCiuOBvuOBmeOBiz8nLFxuICAgICAgJ29wdGlvbnMnOiBbXG4gICAgICAgICdZRVMnLFxuICAgICAgICAnTk8nLFxuICAgICAgXSxcbiAgICAgICdjb3JyZWN0SW5kZXgnOiAwLFxuICAgICAgJ2NvcnJlY3RSZXNwb25zZSc6ICfnj77ku6PkurrjgafjgZnjga3vvIEnLFxuICAgICAgJ2luY29ycmVjdFJlc3BvbnNlJzogJ0lU44Gv6Zuj44GX44GE44KI44Gt44CC44CC44CCJ1xuICAgIH0sXG4gICAge1xuICAgICAgJ3EnOiAn44OB44O844Og44Gn44Gu5rS75YuV44Gv5aW944GN44Gn44GZ44GLJyxcbiAgICAgICdvcHRpb25zJzogW1xuICAgICAgICAnWUVTJyxcbiAgICAgICAgJ05PJ1xuICAgICAgXSxcbiAgICAgICdjb3JyZWN0SW5kZXgnOiAwLFxuICAgICAgJ2NvcnJlY3RSZXNwb25zZSc6ICfnpL7kuqTnmoTjgaDjga0nLFxuICAgICAgJ2luY29ycmVjdFJlc3BvbnNlJzogJ+S4gOS6uuOBruaZgumWk+OCguWkp+S6i+OBoOOCiOOBrSdcbiAgICB9LFxuICAgIHtcbiAgICAgICdxJzogJ0lU44Gr44Go44Gj44Gm44COSlPjgI/jgajjga/jgarjgpPjgafjgZnjgYs/JyxcbiAgICAgICdvcHRpb25zJzogW1xuICAgICAgICAn5aWz5a2Q5bCP5a2m55SfJyxcbiAgICAgICdKYXZhU2NyaXB0J1xuICAgICAgXSxcbiAgICAgICdjb3JyZWN0SW5kZXgnOiAxLFxuICAgICAgJ2NvcnJlY3RSZXNwb25zZSc6ICfmraPop6PvvIEnLFxuICAgICAgJ2luY29ycmVjdFJlc3BvbnNlJzogJ+mBleOBhuOCiO+8gSdcbiAgICB9XG4gIF1cbn0pOyJdfQ==
//# sourceURL=coffeescript