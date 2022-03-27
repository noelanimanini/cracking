var removeNthFromEnd = function(head, n) {
    // create two pointers
    let p1 = head 
    let p2 = head 
    // while n is greater than 0 
    while (n > 0) {
        // assign p2 to be the next iteration 
        p2 = p2.next 
        // detract n
        n--
    }
    //   if the second pointer is equal to null
      if (p2 === null) {
        //   the current head is equal to the next 
          head = head.next 
        //   return the head 
          return head 
      }
    //   while p2 is not null 
   while (p2.next !== null) {
    //    take the first pointer and reassign it to the next 
       p1 = p1.next 
    //    take the second pointer and reassign it to the next 
       p2 = p2.next 
   }
//    take the first pointers iteration's next and assign to the next after. 
      p1.next = p1.next.next 
    //   return the orgiinal head 
      return head 
  };
  