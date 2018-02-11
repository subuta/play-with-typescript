import echo from 'src'

describe('index', () => {
  it('test truth', () => {
    expect(echo(1)).toEqual(1)
  })
})
