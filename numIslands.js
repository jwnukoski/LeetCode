// Prompt URL: https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
const numIslands = function (grid) {
  let islands = 0
  const landDenotation = '1'
  const visitedDonation = '2'

  const recurseLand = (map, x, y) => {
    // up down left right
    const coordinates = [{ x: x, y: y - 1 }, { x: x, y: y + 1 }, { x: x - 1, y: y }, { x: x + 1, y: y }]

    for (let i = 0; i < coordinates.length; i++) {
      if ((coordinates[i].x < 0 || coordinates[i].y < 0) || (coordinates[i].x > map[0].length - 1 || coordinates[i].y > map.length - 1)) {
        // out of bounds
        continue
      }

      if (map[coordinates[i].y][coordinates[i].x] === landDenotation) {
        map[coordinates[i].y][coordinates[i].x] = visitedDonation
        recurseLand(map, coordinates[i].x, coordinates[i].y)
      }
    }
  }

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === landDenotation) {
        grid[y][x] = visitedDonation
        islands++
        recurseLand(grid, x, y)
      }
    }
  }

  return islands
}
