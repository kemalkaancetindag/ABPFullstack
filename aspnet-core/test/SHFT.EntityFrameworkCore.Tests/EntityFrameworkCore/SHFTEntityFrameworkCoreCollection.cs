using Xunit;

namespace SHFT.EntityFrameworkCore;

[CollectionDefinition(SHFTTestConsts.CollectionDefinitionName)]
public class SHFTEntityFrameworkCoreCollection : ICollectionFixture<SHFTEntityFrameworkCoreFixture>
{

}
