module.exports = {
  name: 'store',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/store/',
  snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
