var removeNthFromEnd = function(head, n) {
    let p1 = head 
    let p2 = head 
    
    while (n > 0) {
        p2 = p2.next 
        n--
    }
      
      if (p2 === null) {
          head = head.next 
          return head 
      }
      
   while (p2.next !== null) {
       p1 = p1.next 
       p2 = p2.next 
   }
      p1.next = p1.next.next 
      return head 
  };
  