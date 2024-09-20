export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'getMonkInfo' : IDL.Func([], [IDL.Text], ['query']) });
};
export const init = ({ IDL }) => { return []; };
