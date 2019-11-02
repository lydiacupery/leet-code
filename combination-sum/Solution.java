import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution {
        Integer target;
        List<List<Integer>> resultArray;
        int[] candidates;

        public List<List<Integer>> combinationSum(int[] candidates, Integer target){
            this.target = target;
            this.candidates = candidates;
            List<Integer> currArray = new ArrayList<>();
            this.resultArray = new ArrayList<>();
            backtracking(0,currArray, 0);
            return this.resultArray;
        }

    private void backtracking(int currIndex, List<Integer> currArray, int total){
        if(total > this.target){
            return;
        }
        if(total == this.target){
            this.resultArray.add(new ArrayList<>(currArray));
        }

        // continue exploring the path
        for(int i = currIndex; i< this.candidates.length ;i++ ){
            int nextNum = this.candidates[i];

            // add to curr array and total
            total += nextNum;
            currArray.add(nextNum);

            backtracking(i, currArray, total);

            //backtrack
            currArray.remove(currArray.size() - 1);
            total -= nextNum;
        }
    }
}