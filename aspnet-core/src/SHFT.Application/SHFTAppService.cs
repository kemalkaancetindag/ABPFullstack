using System;
using System.Collections.Generic;
using System.Text;
using SHFT.Localization;
using Volo.Abp.Application.Services;

namespace SHFT;

/* Inherit your application services from this class.
 */
public abstract class SHFTAppService : ApplicationService
{
    protected SHFTAppService()
    {
        LocalizationResource = typeof(SHFTResource);
    }
}
