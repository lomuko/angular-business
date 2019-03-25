module.exports = {
  name: 'views',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/views',
  snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
