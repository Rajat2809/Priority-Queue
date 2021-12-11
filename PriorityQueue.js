class PriorityQueue {
	// Initialize data and length
    constructor() {
        this.data = []
        this.length = 0;
    }
	// enqueue according to priority
    enqueue(val, priority = 0) {
		// Error handeling check
        if (val == undefined || val == null) return;
        let added = false;
		
        for (let i = 0; i < this.length; i++) {
            if (this.data[i].priority > priority) {
			// add to this.data
                this.data.splice(i, 0, {
                    val: val,
                    priority: priority
                })
                this.length += 1;
                added = true;
                return;
            }
        }
		// add to data if this.length=0 or priority is greater then all previous priority
        if (!added) {
            this.data.push({
                val: val,
                priority: priority
            });
            this.length += 1;
            return;
        }
    }
	// Remove element from queue return lowest priority one
    dequeue() {
        if (this.length == 0) return;
        this.length -= 1;
        return this.data.splice(0, 1)
    }

    getLength() {
        return this.length;
    }
}
