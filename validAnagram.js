class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */

  isAnagram(s, t) {
    const sortString = (str) => str.split("").sort().toString();

    return sortString(s) == sortString(t);
  }
}
