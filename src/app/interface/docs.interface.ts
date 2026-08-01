export interface DocCommand {
  id: string;
  title: string;
  description: string;
  code: string;
}

export interface DocSection {
  id: string;
  title: string;
  description: string;
  commands: DocCommand[];
}

export interface Technology {
  id: string;
  name: string;
  icon: string;
  color: string;
  sections: DocSection[];
}
