module.exports = {
    plugins: [
      require('autoprefixer'),
      require('cssnano')({ // ���������� cssnano
        preset: 'default', // ������� ��������� �� ���������
    })
  ]
}