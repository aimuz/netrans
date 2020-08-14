//

interface TransResult {
  dst: string;
  src: string;
}

interface Trans {
  name: string;
  from: string;
  to: string;
  trans_result: TransResult[];
}

abstract class Translater {
  abstract name(): string;

  abstract translate(): Trans;
}
