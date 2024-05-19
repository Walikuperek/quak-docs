export const time = {
    /**
     * @param {number} ms
     * @returns {Promise<void>}
     */
    sleep: (ms = 5000) => new Promise(resolve => setTimeout(resolve, ms))
};


/**
 * @typedef {Object} Page
 * @property {() => Promise<void>} waitForNavigation - waits for navigation to finish
 */

export const nav = {
    /**
     * @param {Page} page
     * @param {() => Promise<unknown>} promise - promise to wait for
     * @returns {Promise<Awaited<?>[]>} - resolves when navigation by given promise is finished
     */
    waitFor:  async (page, promise) =>  await Promise.all([
        page.waitForNavigation(),
        promise()
    ])
};

/** Adds 4 spaces in front of the given string */
export const indent = str => `    ${str}`;
