import path from 'path';
import shell from 'shelljs';

export default function createMeteorProject() {
  const testRoot = path.resolve(__dirname, '../../');
  shell.cd(testRoot);
  shell.rm('-rf', 'example');
  shell.exec('meteor create example');
  shell.cp('-R', 'design', 'example/.design');
  shell.cd('example');
}
