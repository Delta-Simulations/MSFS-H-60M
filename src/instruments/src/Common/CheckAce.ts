function CheckAce(): boolean {
  return Object.prototype.hasOwnProperty.call(window, 'ACE_ENGINE_HANDLE')
}

export default CheckAce
