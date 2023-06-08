import { DiagramDefinition } from '../../diagram-api/types.js';
// @ts-ignore: TODO Fix ts errors
import parser from './parser/sequenceDiagram.jison';
import db from './sequenceDb';
import styles from './styles.js';
import renderer from './sequenceRenderer';

export const diagram: DiagramDefinition = {
  parser,
  db,
  renderer,
  styles,
} as any;
