export type SportProgrammType = 'beginning' | 'advanced' | 'professional';
export type DirectionType =
    | 'home'
    | 'bodybuilding'
    | 'powerlifting'
    | 'crossfit'
    | 'workout';

export interface IDirectionProgram {
    direction: DirectionType;
    bgImageDirection?: string;
    text: string;
}

export interface ITypeProgram {
    type: SportProgrammType;
    bgImageType?: string;
    text: string;
}

export interface IProgram {
    id?: string;
    bgImageProgram: string;
    title: string;
    description: string;
    text: any;
    direction: DirectionType;
    type: SportProgrammType;
}
